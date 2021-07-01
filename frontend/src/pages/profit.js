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
	const userdata = useSelector(state => state.users.userdata)

	const [profitData, setProfitData] = useState([])
	const [contentData, setContentData] = useState([])

	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [profitId, setProfitId] = useState("")
	const [firstName, setFirstName] = useState("")
	const [gameId, setGameId] = useState("")
	const [currnetUserId, setUserId] = useState("")
	const [gameName, setGameName] = useState("")
	const [gameBank, setGameBank] = useState("")
	const [userProfit, setUserProfit] = useState("")
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
			name: "user_name",
			label: "User Name"
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
			name: "user_profit",
			label: "User Profit"
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
								setUserProfit(tableMeta.rowData[3])
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
			user_profit: userProfit,
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
		setProfitId(currnetUserId)
		setFirstName("")
		setGameName("")
		setGameBank("")
		setUserProfit("")
		setProviderProfit("")
		setStatus(false)
		setOpen(true)
	}

	const addNewProfitHandle = async () => {
		let addProfitResult = await API.addProfit({
			user_id: currnetUserId,
			game_id: gameId,
			game_bank: 0,
			user_profit: 0,
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

	const setUser = async (value) => {
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
					user_name: item.userData.firstName,
					game_name: item.gameData.name,
					game_bank: item.game_bank,
					provider_profit: item.provider_profit,
					user_profit: item.user_profit,
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
					options={userdata}
					getOptionLabel={(option) => option.firstName}
					style={{ width: 300 }}
					onChange={(event, newValue) => {
						setUser(newValue);
					}}
					renderInput={(params) => <TextField {...params} label="Users" variant="outlined" />}
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
				userdata={userdata}
				firstName={firstName}
				gameName={gameName}
				games={games}
				gameBank={gameBank}
				userProfit={userProfit}
				providerProfit={providerProfit}

				setOpen={setOpen}
				setGameId={setGameId}
				setUserId={setUserId}
				setFirstName={setFirstName}
				setGameName={setGameName}
				setGameBank={setGameBank}
				setUserProfit={setUserProfit}
				setProviderProfit={setProviderProfit}
				setStatus={setStatus}
				editProfit={editProfit}
				addNewProfitHandle={addNewProfitHandle}
			/>
		</Grid>
	);
}