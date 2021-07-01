import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';

import LoyaltyIcon from '@material-ui/icons/Loyalty';

// import { History } from '../theme'
import MDataTable from './table'
import { EditRtpModal } from './modals'
import useStyles from '../assets/styles';
import { rtp_store } from "../redux/actions/rtp";
import { API } from '../hooks';

export default function Rtp() {
	const classes = useStyles.introduction()
	const dispatch = useDispatch()
	const rtp = useSelector(state => state.rtp.rtpdata)

	const [rtpData, setRtpData] = useState([])
	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [rtpId, setRtpId] = useState("")
	const [rtpValue, setRtpValue] = useState("")

	const options = {
		selectableRows: false,
		filter: true,
		filterType: "textField",
		responsive: "vertical",
		tableBodyWidth: "100%",
		tableBodyHeight: "100%",
		tableBodyMaxHeight: ""
	};

	const columnData = [
		{
			name: 'game_name',
			label: "Game Name"
		},
		{
			name: 'rtp',
			label: "Return To Player (%)"
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
								setRtpId(rtp[tableMeta.rowIndex]._id)
								setRtpValue(tableMeta.rowData[1])
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

	const editRtp = async () => {
		await API.editRtp({
			rtp: rtpValue
		}, rtpId)
		var data = await API.getRtp();
		dispatch(rtp_store(data.data))
		setOpen(false)
	}

	useEffect(() => {
		var arr = []
		if(rtp) {
			rtp.filter(item => {
				arr.push({
					_id: item._id,
					game_name: item.gameData.name,
					rtp: item.rtp
				})
				return item
			})
			setRtpData(arr)
		}
	}, [rtp])

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
			<MDataTable
				title={"RTP"}
				optionData={options}
				columnData={columnData}
				contentData={rtpData}
				open={open}
			/>
			<EditRtpModal
				addStatus={addStatus}
				open={open}
				rtpValue={rtpValue}
				setRtpValue={setRtpValue}
				editRtp={editRtp}
				setOpen={setOpen}
			/>
		</Grid>
	);
}