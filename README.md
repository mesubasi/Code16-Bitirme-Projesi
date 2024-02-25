# Su Hayattır

"Su Hayattır" projesi, Bursa Büyükşehir Belediyesi ve Üretken Akademi Code16 Programı kapsamında su tasarrufu konusunda farkındalık oluşturmak amacıyla geliştirilmiş bir bitirme projesidir.

## Proje Hakkında

"Su Hayattır" projesi, Bursa Büyükşehir Belediyesi ve Üretken Akademi Code16 Programı işbirliği ile geliştirilmiş, su tasarrufu konusunda toplumsal farkındalık oluşturma amacı güden bir bitirme projesidir. Bu proje, suyun kıymetini vurgulayarak, kullanıcıları bu değerli kaynağı daha bilinçli tüketmeye yönlendirmeyi amaçlar. OpenAI teknolojisinin desteğiyle, Bursa'nın açık veri kaynaklarından elde edilen baraj verileri kullanılarak, günlük su durumu hakkında bilgilendirici mesajlar oluşturulup kullanıcılara e-posta yoluyla iletilmektedir. Bu yöntemle, günlük bir su tasarrufu farkındalığı hedeflenmektedir. Ayrıca, projenin "Üretken AI" bölümünde, çeşitli API'ler aracılığıyla farklı hizmetlere erişim sağlanması planlanmaktadır. Şu an için tek bir API ile işlev gösteren bu bölüm, zamanla genişletilerek daha fazla veri kaynağından yararlanmayı hedeflemektedir. Örneğin, "İNEGÖL nöbetçi eczane" sorgusuyla kullanıcılar, bulundukları bölgedeki nöbetçi eczanelere kolayca ulaşabilirler.

### Kullanılan Teknolojiler

- React - Vite
- Tailwind CSS
- body-parser
- chart.js
- cors
- dotenv
- express
- framer-motion
- nodemailer (Resend.com Mail Hizmeti Kullanılmıştır)
- openai
- react-chartjs-2
- react-icons
- react-router-dom

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

Projeyi kullanmak için web tarayıcınızda `localhost` üzerinde çalışan sunucuya gidin. Giriş sekmesinde yeni bir sayfa oluşturabilir ya da varsayılan olan k.adı ve parola "123" olarak giriş yapabilirsiniz ya da kayıt olarak lokal de barındırılan veriler ile sisteme giriş yapabilirsiniz.

### Ekran Görüntüleri

Projenizin ekran görüntülerini buraya ekleyin. Markdown kullanarak bir resim eklemek için:

```markdown
![1](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/db1a0af7-d20f-43ec-8486-86aefabb7f8a)
![2](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/3c225f15-ca6f-46c8-802d-5720a3a247c3)
![3](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/f1a4e51f-fca0-4fe4-8ae2-5459260a4eea)
![4](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/e05cc35e-143f-4677-b267-01b3c2bc8577)
![5](https://github.com/mesubasi/Code16-Bitirme-Projesi/assets/88106043/3beed57b-1955-4bf6-ac20-1cc14f4c217f)
