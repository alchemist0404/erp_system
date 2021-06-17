import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import UpdateIcon from '@material-ui/icons/Update';

// import { History } from '../theme'
import MDataTable from './table'
import { EditProfitModal } from './modals'
import useStyles from '../assets/styles';
import { profits_store } from "../redux/actions/profit";
import { API } from '../hooks';

export default function Profit() {
	
	const classes = useStyles.profit()
	const dispatch = useDispatch()
	const games = useSelector(state => state.games.gamedata)
	const customerdata = useSelector(state => state.customers.customerdata)

	const [profitData, setProfitData] = useState([])
	const [contentData, setContentData] = useState([])

	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [profitId, setProfitId] = useState("")
	const [firstName, setFirstName] = useState("")
	const [gameId, setGameId] = useState("")
	const [currnetCustomerId, setCustomerId] = useState("")
	const [gameName, setGameName] = useState("")
	const [gameBank, setGameBank] = useState("")
	const [customerProfit, setCustomerProfit] = useState("")
	const [providerProfit, setProviderProfit] = useState("")
	const [status, setStatus] = useState(false)

	const options = {
		filter: true,
		filterType: "dropdown",
		responsive: "vertical",
		tableBodyWidth: "100%",
		tableBodyHeight: "100%",
		tableBodyMaxHeight: "",
		onRowsDelete: async (rowsDeleted, dataRows) => {
			const idsToDelete = rowsDeleted.data.map(d => profitData[d.dataIndex]._id); // array of all ids to to be deleted
			if (idsToDelete.length === 1) {
				await API.deleteProfit(idsToDelete[0])
			} else {
				await API.deleteMultiProfit(idsToDelete)
			}
			var data = await API.getAllProfits();
			setProfitData(data.data)
			dispatch(profits_store(data.data));
		}
	};

	const columnData = [
		{
			name: "customer_name",
			label: "Customer Name"
		},
		{
			name: "game_name",
			label: "Game Name"
		},
		{
			name: "game_bank",
			label: "Game Bank"
		},
		{
			name: "customer_profit",
			label: "Customer Profit"
		},
		{
			name: "provider_profit",
			label: "Provider Profit"
		},
		{
			name: "status",
			label: "Status"
		},
		{
			name: "Edit",
			options: {
				filter: true,
				sort: false,
				empty: true,
				customBodyRender: (value, tableMeta, updateValue) => {
					return (
						<IconButton
							color="inherit"
							aria-label="edit to shopping cart"
							onClick={() => {
								setAddStatus(false)
								setProfitId(profitData[tableMeta.rowIndex]._id)
								setFirstName(tableMeta.rowData[0])
								setGameName(tableMeta.rowData[1])
								setGameBank(tableMeta.rowData[2])
								setCustomerProfit(tableMeta.rowData[3])
								setProviderProfit(tableMeta.rowData[4])
								setStatus(tableMeta.rowData[5])
								setOpen(true)
							}}
						>
							<LoyaltyIcon />
						</IconButton>
					);
				}
			}
		}
	]

	const editProfit = async () => {
		await API.editProfit({
			game_bank: gameBank,
			customer_profit: customerProfit,
			provider_profit: providerProfit,
			status: status
		}, profitId)
		var data = await API.getAllProfits()
		setProfitData(data.data)
		dispatch(profits_store(data.data))
		setOpen(false)
	}

	const updateProfit = async () => {
		var data = await API.getAllProfits();
		setProfitData(data.data)
		dispatch(profits_store(data.data));
	}

	const addNewProfit = () => {
		setAddStatus(true)
		setProfitId(currnetCustomerId)
		setFirstName("")
		setGameName("")
		setGameBank("")
		setCustomerProfit("")
		setProviderProfit("")
		setStatus(false)
		setOpen(true)
	}

	const addNewProfitHandle = async () => {
		let addProfitResult = await API.addProfit({
			customer_id: currnetCustomerId,
			game_id: gameId,
			game_bank: 0,
			customer_profit: 0,
			provider_profit: 0,
			status: true
		});
		if(addProfitResult.msg !== "" && addProfitResult.msg !== undefined) {
			alert(addProfitResult.msg);
		}
		var data = await API.getAllProfits()
		setProfitData(data.data)
		dispatch(profits_store(data.data))

		setOpen(false)
	}

	const getAllProfitData = async () => {
		var profits = await API.getAllProfits()
		if(profits.data) {
			setProfitData(profits.data)
		} else {
			setProfitData([])
		}
	}

	const setCustomer = async (value) => {
		if(value === null) {
			getAllProfitData()
		} else {
			var profits = await API.getProfits(value._id)
			if(profits.data) {
				setProfitData(profits.data)
			} else {
				setProfitData([])
			}
		}
	}
	
	useEffect(() => {
		getAllProfitData()
	}, [])

	useEffect(() => {
		if(profitData !== undefined) {
			var arr = []
			profitData.filter(item => {
				arr.push({
					customer_name: item.customerData.firstName,
					game_name: item.gameData.name,
					game_bank: item.game_bank,
					provider_profit: item.provider_profit,
					customer_profit: item.customer_profit,
					status: `${item.status}`
				})
				return item
			})
			setContentData(arr)
		}
	}, [profitData])

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
			<Grid className={classes.mainHeader}>
				<Button onClick={addNewProfit}>
					<AddBoxIcon /> Add New Game
				</Button>
				<Button onClick={updateProfit}>
					<UpdateIcon /> Update Game
				</Button>
				<Autocomplete
					id="combo-box-demo"
					options={customerdata}
					getOptionLabel={(option) => option.firstName}
					style={{ width: 300 }}
					onChange={(event, newValue) => {
						setCustomer(newValue);
					}}
					renderInput={(params) => <TextField {...params} label="Customers" variant="outlined" />}
				/>
			</Grid>
			<MDataTable
				title={"Profit"}
				optionData={options}
				columnData={columnData}
				contentData={contentData}
				open={open}
			/>
			<EditProfitModal
				
				addStatus={addStatus}
				open={open}
				status={status}
				customerdata={customerdata}
				firstName={firstName}
				gameName={gameName}
				games={games}
				gameBank={gameBank}
				customerProfit={customerProfit}
				providerProfit={providerProfit}

				setOpen={setOpen}
				setGameId={setGameId}
				setCustomerId={setCustomerId}
				setFirstName={setFirstName}
				setGameName={setGameName}
				setGameBank={setGameBank}
				setCustomerProfit={setCustomerProfit}
				setProviderProfit={setProviderProfit}
				setStatus={setStatus}
				editProfit={editProfit}
				addNewProfitHandle={addNewProfitHandle}
			/>
		</Grid>
	);
}