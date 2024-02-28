import express from "express"
import { getCustomers,
    addCustomer,
    updateCustomer,
    deleteCustomer,
    getCustomer
} from '../controllers/customer.js'

const router = express.Router()

router.get("/", getCustomers)

router.get('/:customer_id', getCustomer)

router.post('/', addCustomer)

router.put("/:customer_id", updateCustomer)

router.delete('/:customer_id', deleteCustomer)

export default router