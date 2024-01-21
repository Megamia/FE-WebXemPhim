const sql = require('mssql');

const config = {
  server: 'DESKTOP-DU2RDFE',
  port: 1433,
  user: 'sa',
  password: 'sa',
  database: 'HAITEN',
  stream: false,
  options: {
    encrypt: false,
    trustServerCertificate: false,
  },
};

sql.connect(config).then(pool => {
  if (pool.connecting) {
    console.log('Connecting to the database...');
  }
  if (pool.connected) {
    console.log('Connected to SQL Server');

    // Lấy tên người dùng và mật khẩu từ bảng "user"
    const request = pool.request();
    request.query('SELECT username, password FROM [user]', (error, result) => {
      if (error) {
        console.error('Error executing query:', error);
        return;
      }

      // Hiển thị kết quả trên console
      result.recordset.forEach(row => {
        console.log('Username:', row.username);
        console.log('Password:', row.password);
      });

      // Đóng kết nối sau khi hoàn thành
      sql.close();
    });
  }
}).catch(error => {
  console.error('Failed to connect to SQL Server:', error);
});