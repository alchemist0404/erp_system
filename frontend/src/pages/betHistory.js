import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux'

// import { History } from '../theme'
import MDataTable from './table'
import useStyles from '../assets/styles';
import { bet_history_store } from "../redux/actions/betHistory";
import { API } from '../hooks';

export default function BetHistory() {
	const classes = useStyles.introduction()
	const dispatch = useDispatch()
	const betHistories = useSelector(state => state.betHistory.betHistory)

    const [betHistoryData, setBetHistoryData] = useState([])
	const [open] = useState(false)

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
			name: 'customer_name',
			label: "Customer Name"
		},
		{
			name: 'bet_amount',
			label: "Bet Amount"
		},
		{
			name: 'win_amount',
			label: "Win Amount"
		},
		{
			name: 'date',
			label: "Date",
            options: {
                customBodyRender: (value, tableMeta, updateValue) => {
                    return (
                        new Date(tableMeta.rowData[4]).toLocaleString()
                    )
                }
            }
		}
	]

	useEffect(() => {
        loadBetHistory()
	}, [])

    useEffect(() => {
        var n_bets = [];
        for (let i = 0; i < betHistories.length; i++) {
            n_bets.push({
                game_name: betHistories[i].game_id.name,
                customer_name: betHistories[i].customer_id.firstName,
                win_amount: betHistories[i].win_amount,
                bet_amount: betHistories[i].bet_amount,
                date: betHistories[i].date,
            })
        }
        setBetHistoryData(n_bets)
    }, [betHistories])
	
    const loadBetHistory = async () => {
        var data = await API.getBetHistory();
		dispatch(bet_history_store(data.data))
    }

	return (
		<Grid container spacing={2} className={classes.mainContainer}>
        {
            console.log(betHistoryData)
        }
			<MDataTable
				title={"RTP"}
				optionData={options}
				columnData={columnData}
				contentData={betHistoryData}
				open={open}
			/>
		</Grid>
	);
}