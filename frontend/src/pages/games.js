import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import AddBoxIcon from '@material-ui/icons/AddBox';
import LoyaltyIcon from '@material-ui/icons/Loyalty';

// import { History } from '../theme'
import MDataTable from './table'
import { EditGameModal } from './modals'
import useStyles from '../assets/styles';
import { games_store } from "../redux/actions/games";
import { rtp_store } from "../redux/actions/rtp";
import { API } from '../hooks';

export default function Games() {
	
	const classes = useStyles.introduction()
	const dispatch = useDispatch()
	const games = useSelector(state => state.games.gamedata)

	const [gameData, setGameData] = useState([])
	const [open, setOpen] = useState(false)
	const [addStatus, setAddStatus] = useState(false)
	const [gameId, setGameId] = useState("")
	const [gameName, setGameName] = useState("")
	const [gameType, setGameType] = useState("")
	const [gameRoute, setGameRoute] = useState("")
	const [winPercentage, setWinPercentage] = useState("")

	const options = {
		filter: true,
		filterType: "dropdown",
		responsive: "vertical",
		tableBodyWidth: "100%",
		tableBodyHeight: "100%",
		tableBodyMaxHeight: "",
		onRowsDelete: async (rowsDeleted, dataRows) => {
			const idsToDelete = rowsDeleted.data.map(d => games[d.dataIndex]._id); // array of all ids to to be deleted
			if (idsToDelete.length === 1) {
				await API.deleteGame(idsToDelete[0])
			} else {
				await API.deleteMultiGame(idsToDelete)
			}
			var data = await API.getGames();
			dispatch(games_store(data.data))
			
			var rtpData = await API.getRtp();
			dispatch(rtp_store(rtpData.data))
		}
	};

	const columnData = [
		{
			name: "name",
			label: "Name"
		},
		{
			name: "type",
			label: "Type"
		},
		{
			name: "route",
			label: "Game Route & Directory"
		},
		{
			name: "win_percentage",
			label: "Game Win Percentage"
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
								setGameId(games[tableMeta.rowIndex]._id)
								setGameName(tableMeta.rowData[0])
								setGameType(tableMeta.rowData[1])
								setGameRoute(tableMeta.rowData[2])
								setWinPercentage(tableMeta.rowData[3])
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

	const editGame = async () => {
		await API.editGame({
			type: gameType,
			name: gameName,
			route: gameRoute,
			win_percentage: winPercentage
		}, gameId)
		var data = await API.getGames();
		dispatch(games_store(data.data))
		
		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	const addNewGame = () => {
		setAddStatus(true)
		setGameName("")
		setGameType("")
		setGameRoute("")
		setWinPercentage("")
		setOpen(true)
	}

	const addNewGameHandle = async () => {
		let addGameResult = await API.addGame({
			name: gameName,
			route: gameRoute,
			type: gameType,
			win_percentage: winPercentage
		});
		if(addGameResult.msg !== "") {
			alert(addGameResult.msg);
		}
		var data = await API.getGames()
		dispatch(games_store(data.data))

		var rtpData = await API.getRtp();
		dispatch(rtp_store(rtpData.data))
		setOpen(false)
	}

	useEffect(() => {
		setGameData(games)
	}, [games])

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
			<Button onClick={addNewGame}>
				<AddBoxIcon /> Add New Game
			</Button>
			<MDataTable
				title={"Games"}
				optionData={options}
				columnData={columnData}
				contentData={gameData}
				open={open}
			/>
			<EditGameModal
				addStatus={addStatus}
				open={open}
				gameName={gameName}
				gameType={gameType}
				gameRoute={gameRoute}
				winPercentage={winPercentage}
				setWinPercentage={setWinPercentage}
				setOpen={setOpen}
				setGameName={setGameName}
				setGameType={setGameType}
				setGameRoute={setGameRoute}
				editGame={editGame}
				addNewGameHandle={addNewGameHandle}
			/>
		</Grid>
	);
}