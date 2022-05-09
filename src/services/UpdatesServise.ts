import pool from '../db/connection'

class UpdatesService {

    public async createPayment(id: number, payment: number, currency: string, paymentee: string) {
        const res = await pool.query('INSERT INTO payments (id, payment, currency, paymentee) VALUES ($1, $2, $3, $4)', [id, payment, currency, paymentee]);
        return res;
    }

    public async getPayments(group?: any) {
        if (group) {
            // const dates = await pool.query('SELECT DISTINCT create_at FROM payments');         

            // dates.rows.map(async (data) => {
            //     console.log(data.create_at);
            //     const payment = await pool.query(`SELECT id, payment, currency, paymentee FROM payments WHERE create_at = ${data.create_at}`);
                

            //     res[`${data.create_at.toLocaleDateString({ year: 'numeric', month: 'long', day: 'numeric' })}`] = payment.rows;
            // })

            const payments = await pool.query(`SELECT id, payment, currency, paymentee, create_at FROM payments`);

            return payments;
            
        } else {
            const res = await pool.query('SELECT * FROM payments')

            return res.rows;
        }
    }
}

export default UpdatesService;