function logRequest(req, res, next) {
    const { originalUrl, ip } = req; // url completa que foi chamada e o IP de quem chamou
    console.log(`[${new Date().toISOString()}] ${originalUrl} - IP: ${ip}`);
    next(); // sem isso a requisição trava aqui
}

export default logRequest;//n precisa do exporte na funcao, por ser so uma 


