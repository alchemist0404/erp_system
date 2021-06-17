import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

// import { History } from '../theme'
import MDataTable from './table'
import { EditCustomerModal } from './modals'
import useStyles from '../assets/styles';
import { customers_store } from "../redux/actions/customers";
import { rtp_store } from "../redux/actions/rtp";
import { API } from '../hooks';

export default function Customers() {

	const classes = useStyles.introduction()
	const dispatch = useDispatch()
	const customers = useSelector(state => state.customers.customerdata)

	const [customerData, setCustomerData] = useState([])
	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [customerId, setCustomerId] = useState("")
	const [customerFirstName, setCustomerFirstName] = useState("")
	const [customerLastName, setCustomerLastName] = useState("")
	const [customerPhoneNumber, setCustomerPhoneNumber] = useState("")
	const [customerEmail, setCustomerEmail] = useState("")
	const [customerProfit, setCustomerProfit] = useState(0)

	const options = {
		filter: true,
		filterType: "dropdown",
		responsive: "vertical",
		tableBodyWidth: "100%",
		tableBodyHeight: "100%",
		tableBodyMaxHeight: "",
		onRowsDelete: async (rowsDeleted, dataRows) => {
			const idsToDelete = rowsDeleted.data.map(d => customers[d.dataIndex]._id); // array of all ids to to be deleted
			if (idsToDelete.length === 1) {
				await API.deleteCustomer(idsToDelete[0])
			} else {
				await API.deleteMultiCustomer(idsToDelete)
			}
			var data = await API.getCustomers();
			dispatch(customers_store(data.data))

			var rtpData = await API.getRtp();
			dispatch(rtp_store(rtpData.data))
		}
	};
	// providerProfit
	const columnData = [
		{
			name: "firstName",
			label: "First Name",
		},
		{
			name: "lastName",
			label: "Last Name",
		},
		{
			name: "phoneNumber",
			label: "Phone Number",
		},
		{
			name: "email",
			label: "Email",
		},
		{
			name: "providerProfit",
			label: "Provider Profit(%)",
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
								setCustomerId(customers[tableMeta.rowIndex]._id)
								setCustomerFirstName(tableMeta.rowData[0])
								setCustomerLastName(tableMeta.rowData[1])
								setCustomerPhoneNumber(tableMeta.rowData[2])
								setCustomerEmail(tableMeta.rowData[3])
								setCustomerProfit(tableMeta.rowData[4])
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

	const editCustomer = async () => {
		await API.editCustomer({
			firstName: customerFirstName,
			lastName: customerLastName,
			phoneNumber: customerPhoneNumber,
			email: customerEmail,
			providerProfit: customerProfit
		}, customerId)
		var data = await API.getCustomers();
		dispatch(customers_store(data.data))

		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	const addNewCustomer = () => {
		setAddStatus(true)
		setCustomerFirstName("")
		setCustomerLastName("")
		setCustomerPhoneNumber("")
		setCustomerEmail("")
		setCustomerProfit(0)
		setOpen(true)
	}

	const addNewCustomerHandle = async () => {
		let addCustomerResult = await API.addCustomer({
			firstName: customerFirstName,
			lastName: customerLastName,
			phoneNumber: customerPhoneNumber,
			email: customerEmail,
			providerProfit: customerProfit
		});
		if (addCustomerResult.msg !== "" && addCustomerResult.msg !== undefined) {
			alert(addCustomerResult.msg);
		}
		var data = await API.getCustomers()
		dispatch(customers_store(data.data))

		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	useEffect(() => {
		setCustomerData(customers)
	}, [customers])

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
			<Button onClick={addNewCustomer}>
				<AddBoxIcon /> Add New Customer
			</Button>
			<MDataTable
				title={"Customers"}
				optionData={options}
				columnData={columnData}
				contentData={customerData}
				open={open}
			/>
			<EditCustomerModal
				addStatus={addStatus}
				open={open}
				setOpen={setOpen}
				customerFirstName={customerFirstName}
				customerLastName={customerLastName}
				customerPhoneNumber={customerPhoneNumber}
				customerEmail={customerEmail}
				customerProfit={customerProfit}
				setCustomerFirstName={setCustomerFirstName}
				setCustomerLastName={setCustomerLastName}
				setCustomerPhoneNumber={setCustomerPhoneNumber}
				setCustomerEmail={setCustomerEmail}
				setCustomerProfit={setCustomerProfit}
				editCustomer={editCustomer}
				addNewCustomerHandle={addNewCustomerHandle}
			/>
		</Grid>
	);
}