require("dotenv").config();
CONFIG = {};
CONFIG.db_dialect = process.env.DB_DIALECT;
CONFIG.db_host = process.env.DB_HOST;
CONFIG.db_port = process.env.DB_PORT;
CONFIG.db_name = process.env.DB_NAME;
CONFIG.db_user = process.env.DB_USER;
CONFIG.db_password = process.env.DB_PASSWORD;
CONFIG.jwt_encryption =  "sddsdfd";
CONFIG.jwt_expiration =  "86400000";

CONFIG.max_pool_conn = process.env.MAX_POOL_CONN || "5";
CONFIG.min_pool_conn = process.env.MIN_POOL_CONN || "0";
CONFIG.conn_idle_time = process.env.CONN_IDLE_TIME || "10000";