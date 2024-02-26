# Su Hayattır

"Su Hayattır" projesi, Bursa Büyükşehir Belediyesi ve Üretken Akademi Code16 Programı kapsamında su tasarrufu konusunda farkındalık oluşturmak amacıyla geliştirilmiş bir bitirme projesidir.

## Proje Hakkında

"Su Hayattır" projesi, Bursa Büyükşehir Belediyesi ve Üretken Akademi Code16 Programı işbirliği ile geliştirilmiş, su tasarrufu konusunda toplumsal farkındalık oluşturma amacı güden bir bitirme projesidir. Bu proje, suyun kıymetini vurgulayarak, kullanıcıları bu değerli kaynağı daha bilinçli tüketmeye yönlendirmeyi amaçlar. OpenAI teknolojisinin desteğiyle, Bursa'nın açık veri kaynaklarından elde edilen baraj verileri kullanılarak, günlük su durumu hakkında bilgilendirici mesajlar oluşturulup kullanıcılara e-posta yoluyla iletilmektedir. Bu yöntemle, günlük bir su tasarrufu farkındalığı hedeflenmektedir. Ayrıca, projenin "Üretken AI" bölümünde, çeşitli API'ler aracılığıyla farklı hizmetlere erişim sağlanması planlanmaktadır. Şu an için tek bir API ile işlev gösteren bu bölüm, zamanla genişletilerek OpenAI ile eşzamanlı olarak çalışıp daha fazla veri kaynağından yararlanmayı ve yapay zekanın gücüyle daha efektif cevaplar verilebilmesi hedeflenmektedir.Şimdilik tek API ile hizmet veren bu bölüm için sorgu örneği "İNEGÖL nöbetçi eczane" ile kullanıcılar, bulundukları bölgedeki nöbetçi eczanelere kolayca ulaşabilirler.

### Kullanılan Teknolojiler

- React - Vite
- Tailwind CSS
- body-parser
- chart.js
- cors
- dotenv
- express
- framer-motion
- nodemailer ([Resend](resend.com) Mail Hizmeti Kullanılmıştır)
- openai
- react-chartjs-2
- react-icons
- react-router-dom
- [Cors Anywhere](https://github.com/Rob--W/cors-anywhere) (Web Servisi olarak API de yaşanan CORS durumu için kullanılmıştır. )

### Kurulum

Projeyi yerel olarak kurup çalıştırmak için aşağıdaki adımları takip edin:

1. Kök dizinde `.env` dosyası oluşturun ve gerekli ortam değişkenlerini tanımlayın. Örnek bir `.env` dosyası şu şekilde olmaktadır:

    ```
   REACT_APP_OPENAI_API_KEY=OpenAI API Anahtarınız
   PORT=3000
   EMAIL_HOST=smtp.resend.com // SMTP Sunucunuz
   EMAIL_PORT=465
   EMAIL_USER=Mail Adresiniz // SMTP Olarak Kullanacağınız Mail Adresiniz
   RESEND_API_KEY=Resend.com API Anahtarınız
    ```

2. Proje deposunu klonlayın ve bağımlılıkları yükleyin:

    ```bash
    git clone https://github.com/mesubasi/Code16-Bitirme-Projesi.git
    cd Code16-Bitirme-Projesi
    npm install
    ```

3. Geliştirme sunucusunu başlatın:

    ```bash
    npm run dev
    ```

Bu komutlar projeyi geliştirme modunda çalıştırır ve tarayıcınızda otomatik olarak açılmalıdır.

### Kullanım

Projeyi kullanmak için web tarayıcınızda `localhost` üzerinde çalışan sunucuya gidin. Giriş sekmesinde yeni bir sayfa oluşturabilir ya da varsayılan olan k.adı ve parola "123" olarak giriş yapabilirsiniz ya da kayıt olarak lokal de barındırılan veriler ile sisteme giriş yapabilirsiniz. Giriş yaptıktan sonra AI bölümü açıldığında bu kısımm da veriler geldikten sonra isterseniz belirtilen kısıma mail adresini kaydedip Üretken AI butonuna tıklayarak mesaj oluşturabilir ve daha sonrasında gönder butonu ile mesajı mail olarak gönderebilirsiniz. Mail adresleri ekleme kısmındaki diğer bir çözüm ise  src/components/Mail/bcc_mail.js dosyasında ise liste şeklinde statik olarak mail adresleri ekleyebilirsiniz.

### Ekran Görüntüleri

![1](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/707b3d3e-a680-47b7-98f3-130ffb638ec4)
![2](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/6485cbe5-6594-411c-a144-35a866f2a956)
![3](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/9312801d-fa0f-4d5b-9f85-34b122cc67c9)
![4](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/d3618fda-4a24-4f0f-ace1-a51cea540e87)
![5](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/d1259d05-b4dd-4579-a776-8b9733b30d50)
