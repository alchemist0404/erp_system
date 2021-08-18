import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import AddBoxIcon from '@material-ui/icons/AddBox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

// import { History } from '../theme'
import MDataTable from './table'
import { EditUserModal } from './modals'
import useStyles from '../assets/styles';
import { users_store } from "../redux/actions/users";
import { rtp_store } from "../redux/actions/rtp";
import { API } from '../hooks';

export default function Users() {

	const classes = useStyles.introduction()
	const dispatch = useDispatch()
	const users = useSelector(state => state.users.userdata)

	const [userData, setUserData] = useState([])
	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [userId, setUserId] = useState("")
	const [userFirstName, setUserFirstName] = useState("")
	const [userLastName, setUserLastName] = useState("")
	const [userPhoneNumber, setUserPhoneNumber] = useState("")
	const [userEmail, setUserEmail] = useState("")
	const [userEndpoints, setUserEndpoints] = useState({
		auth: "",
		credit: "",
		debit: ""
	})
	const [userProfit, setUserProfit] = useState(0)

	const options = {
		filter: true,
		filterType: "dropdown",
		responsive: "vertical",
		tableBodyWidth: "100%",
		tableBodyHeight: "100%",
		tableBodyMaxHeight: "",
		onRowsDelete: async (rowsDeleted, dataRows) => {
			const idsToDelete = rowsDeleted.data.map(d => users[d.dataIndex]._id); // array of all ids to to be deleted
			if (idsToDelete.length === 1) {
				await API.deleteUser(idsToDelete[0])
			} else {
				await API.deleteMultiUser(idsToDelete)
			}
			var data = await API.getUsers();
			dispatch(users_store(data.data))

			var rtpData = await API.getRtp();
			dispatch(rtp_store(rtpData.data))
		}
	};
	// providerProfit
	const columnData = [
		{
			name: "_id",
			label: "User ID",
		},
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
			name: "endpoints",
			label: "Edit",
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
								setUserId(users[tableMeta.rowIndex]._id)
								setUserFirstName(tableMeta.rowData[1])
								setUserLastName(tableMeta.rowData[2])
								setUserPhoneNumber(tableMeta.rowData[3])
								setUserEmail(tableMeta.rowData[4])
								setUserProfit(tableMeta.rowData[5])
								setUserEndpoints(users[tableMeta.rowIndex].endpoints)
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

	const editUser = async () => {
		await API.editUser({
			firstName: userFirstName,
			lastName: userLastName,
			phoneNumber: userPhoneNumber,
			email: userEmail,
			providerProfit: userProfit,
			endpoints: userEndpoints
		}, userId)
		var data = await API.getUsers();
		dispatch(users_store(data.data))

		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	const addNewUser = () => {
		setAddStatus(true)
		setUserFirstName("")
		setUserLastName("")
		setUserPhoneNumber("")
		setUserEmail("")
		setUserEndpoints({
			auth: "",
			credit: "",
			debit: ""
		})
		setUserProfit(0)
		setOpen(true)
	}

	const addNewUserHandle = async () => {
		let addUserResult = await API.addUser({
			firstName: userFirstName,
			lastName: userLastName,
			phoneNumber: userPhoneNumber,
			email: userEmail,
			providerProfit: userProfit,
			endpoints: userEndpoints
		});
		if (addUserResult.msg !== "" && addUserResult.msg !== undefined) {
			alert(addUserResult.msg);
		}
		var data = await API.getUsers()
		dispatch(users_store(data.data))

		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	useEffect(() => {
		setUserData(users)
	}, [users])

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
			<Button onClick={addNewUser}>
				<AddBoxIcon /> Add New User
			</Button>
			<MDataTable
				title={"Users"}
				optionData={options}
				columnData={columnData}
				contentData={userData}
				open={open}
			/>
			<EditUserModal
				addStatus={addStatus}
				open={open}
				setOpen={setOpen}
				userFirstName={userFirstName}
				userLastName={userLastName}
				userPhoneNumber={userPhoneNumber}
				userEmail={userEmail}
				userProfit={userProfit}
				userEndpoints={userEndpoints}
				setUserFirstName={setUserFirstName}
				setUserLastName={setUserLastName}
				setUserPhoneNumber={setUserPhoneNumber}
				setUserEmail={setUserEmail}
				setUserProfit={setUserProfit}
				editUser={editUser}
				addNewUserHandle={addNewUserHandle}
				setUserEndpoints={setUserEndpoints}
			/>
		</Grid>
	);
}