import {  ALLJOBS, FEATUREDJOBS} from "../constants/actionTypes"

export default  (job = [],action) => {
    switch (action.type) {
        case FEATUREDJOBS:
            return action.data
        case ALLJOBS:
            return action.data
        default:
            return job
    }
}