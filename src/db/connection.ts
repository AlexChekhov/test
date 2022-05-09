import { Pool } from 'pg';

const pool = new Pool ({
    max: 20,
    connectionString: 'postgres://postgres:qwerty@localhost:5432/test',
    idleTimeoutMillis: 30000
});

export default pool;