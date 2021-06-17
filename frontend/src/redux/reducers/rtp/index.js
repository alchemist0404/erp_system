import { 
    RTP
} from "../../constants";

const Rtp = (state = {
    rtpdata : []
}, action) => {
    switch (action.type) {
        case RTP :{
            return { ...state, rtpdata : action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default Rtp;