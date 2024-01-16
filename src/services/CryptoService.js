// src/services/CryptoService.js
class CryptoService {
  encrypt(data, sessionKey) {
    if (!sessionKey) {
      throw new Error('Called encrypt() without a session key');
    }
    // Şifreleme işlemi burada gerçekleştirilir
    // ...
  }

  // Diğer şifreleme ve çözme fonksiyonları burada olabilir
}

export default CryptoService;
