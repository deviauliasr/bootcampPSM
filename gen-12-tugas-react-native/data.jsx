const data = {
  trip: [
    {
      id: '1',
      title: 'Klayar Beach',
      imageSrc:
        'https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2019/08/8512385734_aa9de6c2b0_o-1024x597.jpg',
      description:
        'Pantai Klayar menyimpan banyak keindahan yang unik dan juga menyimpan misteri. Keindahan yang ada diantaranya pasir putih, karang raksasa mirip Sphinx di Mesir, Seruling Laut, Air Mancur alami, Air terjun, dan batu karang indah. Lebih banyak turis mancanegara yang mengenal Pantai Klayar dibanding wisatawan domestik dikarenakan Pantai Klayar lebih dikenal melalui internet dibandingkan melalui pemberitaan di media offline.',
      location: 'Jawa Timur, Indonesia',
    },
    {
      id: '2',
      title: 'Bromo',
      imageSrc:
        'https://m.lepassuntuk.com/photos/tours/3/4/bromo-premium-upload-foto.png',
      description:
        'Gunung Bromo atau dalam bahasa Tengger dieja "Brama", juga disebut Kaldera Tengger, adalah sebuah gunung berapi aktif di Jawa Timur, Indonesia. Gunung ini memiliki ketinggian 2.329 meter di atas permukaan laut dan berada dalam empat wilayah kabupaten, yakni Kabupaten Probolinggo, Kabupaten Pasuruan, Kabupaten Lumajang, dan Kabupaten Malang. Gunung Bromo terkenal sebagai objek wisata utama di Jawa Timur. Sebagai sebuah objek wisata, Bromo menjadi menarik karena statusnya sebagai gunung berapi yang masih aktif. Gunung Bromo termasuk dalam kawasan Taman Nasional Bromo Tengger Semeru.',
      location: 'Jawa Timur, Indonesia',
    },
    {
      id: '3',
      title: 'Borobudur',
      imageSrc:
        'https://asset.kompas.com/crops/yj0-SfdMiVs8Nls4qdxTEjMh-w0=/0x0:780x520/750x500/data/photo/2021/06/18/60cc40a0dbe72.png',
      description: 'Lorem2',
      location: 'Jawa Tengah, Indonesia',
    },
    {
      id: '4',
      title: 'Lake Toba',
      imageSrc:
        'data:image/jpeg;base64,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',
      description:
        'Danau Toba adalah lokasi letusan gunung berapi super masif berkekuatan VEI 8 sekitar 69.000 sampai 77.000 tahun yang lalu[2][3][4] yang memicu perubahan iklim global. Metode penanggalan terkini menetapkan bahwa 74.000 tahun yang lalu lebih akurat.[5] Letusan ini merupakan letusan eksplosif terbesar di Bumi dalam kurun 25 juta tahun terakhir.',
      location: 'Sumatra Utara, Indonesia',
    },
    {
      id: '5',
      title: 'Kawah Putih',
      imageSrc:
        'https://www.rayadventure.com/wp-content/uploads/2018/05/wisata-kawah-putih-bandung.jpg',
      description:
        'Kawah Putih adalah sebuah tempat wisata di Jawa Barat yang terletak di Desa Alam Endah, Kecamatan Rancabali, Kabupaten Bandung Jawa Barat yang terletak di kaki Gunung Patuha. Kawah putih merupakan sebuah danau yang terbentuk dari letusan Gunung Patuha. Tanah yang bercampur belerang di sekitar kawah ini berwarna putih, lalu warna air yang berada di kawah ini berwarna putih kehijauan, yang unik dari kawah ini adalah airnya kadang berubah warna. Danau Kawah Putih sendiri berada pada ketinggian 2194 m tapi luas total Danau Kawah Putih 25 ha yang dipakai wisata 5 ha dan lokasi kawah sendiri 3 ha.[1]',
      location: 'Jawa Barat, Indonesia',
    },
    {
      id: '6',
      title: 'Prambanan',
      imageSrc:
        'https://asset.kompas.com/crops/OB_2V4Pwac0rcrsW5qrWmrf5TfA=/0x0:996x664/750x500/data/photo/2020/03/11/5e68ab313e73d.jpg',
      description:
        'Candi Prambanan merupakan candi Hindu yang terbesar di Indonesia. Sampai saat ini belum dapat dipastikan kapan candi ini dibangun dan atas perintah siapa, namun kuat dugaan bahwa Candi Prambanan dibangun sekitar pertengahan abad ke-9 oleh raja dari Wangsa Sanjaya, yaitu Raja Balitung Maha Sambu. Dugaan tersebut didasarkan pada isi Prasasti Syiwagrha yang ditemukan di sekitar Prambanan dan saat ini tersimpan di Museum Nasional di Jakarta. Prasasti berangka tahun 778 Saka (856 M) ini ditulis pada masa pemerintahan Rakai Pikatan.',
      location: 'Yogyakarta, Indonesia',
    },
  ],
  hotel: [
    {
      id: '1',
      title: 'Vue Palace',
      imageSrc:
        'https://asset.kompas.com/crops/dJ077Yd4bvZSS16FOb-iSW58dBI=/112x0:1189x718/750x500/data/photo/2021/11/11/618d2215bf0fe.jpeg',
      location: 'Bandung, Indonesia',
      description: '-',
    },
    {
      id: '2',
      title: 'La Luna Resort',
      imageSrc:
        'https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/t_htl-dskt/tix-hotel/images-web/2020/10/31/5dbdee56-19ce-4621-b65b-9047e3c918fa-1604132455403-81152b53a4271e434f2b06be5a4d27e9.jpg',
      location: 'Yogyakarta, Indonesia',
      description: '-',
    },
    {
      id: '3',
      title: 'The Chendela',
      imageSrc:
        'https://ik.imagekit.io/tvlk/apr-asset/dgXfoyh24ryQLRcGq00cIdKHRmotrWLNlvG-TxlcLxGkiDwaUSggleJNPRgIHCX6/hotel/asset/67750982-960x640-FIT_AND_TRIM-d67f5456de73c327482b8cd664f70b4d.jpeg?tr=q-40,c-at_max,w-1280,h-720&_src=imagekit',
      location: 'Yogyakarta, Indonesia',
      description: '-',
    },
  ],
  event: [
    {
      id: '1',
      title: 'Wisata Mangrove',
      imageSrc:
        'https://sikidang.com/wp-content/uploads/Wisata-Mangrove-Jakarta.jpg',
      description:
        'Nikmati berbagai macam spot dan wahana menarik di Wisata Mangrove bersama keluarga. Alam yang mempesona dengan suasana menenangkan juga akan memanjakan perjalanan liburan anda dan keluarga.',
      location:
        'Jl. Garden House, Kamal Muara, Kec. Penjaringan, Kota Jakarta Utara, DKI Jakarta.',
    },
    {
      id: '2',
      title: 'Museum Wayang',
      imageSrc: 'https://sikidang.com/wp-content/uploads/Museum-Wayang-1.jpg',
      description:
        'Jika anda pecinta sejarah, budaya dan ingin mengetahui lebih jauh tentang kebudayaan Indonesia satu ini. Anda bisa mengunjungi Museum Wayang, karena banyak koleksi menarik yang bisa anda saksikan di obyek wisata Jakarta satu ini.',
      location:
        'Pinangsia, Kota Tua, Kec. Taman Sari, Jakarta Barat, DKI Jakarta.',
    },
    {
      id: '3',
      title: 'Museum Bahari',
      imageSrc: 'https://sikidang.com/wp-content/uploads/Museum-Bahari.jpg',
      description:
        'Destinasi wisata anak dan keluarga di Jakarta selanjutnya yang rekomended untuk dikunjungi ketika hari libur yaitu Museum Bahari. Banyak koleksi barangan khususnya dunia kelautan Indonesia.',
      location:
        'Jl. Ps. Ikan, Penjaringan, Kec. Penjaringan, Kota Jakarta Utara, DKI Jakarta.',
    },
    {
      id: '4',
      title: 'Pantai Ancol',
      imageSrc: 'https://sikidang.com/wp-content/uploads/Pantai-Ancol.jpg',
      description:
        'Pantai Ancol menyajikan pesona wisata dengan berbagai macam aktivitas dan wahana menariknya. Dijamin liburan anda dan keluarga akan seru dan menyenangkan di tempat wisata Jakarta satu ini.',
      location:
        'Taman Impian Jaya, Ancol, Kec. Pademangan, Kota Jakarta Utara, DKI Jakarta.',
    },
    {
      id: '5',
      title: 'TMII',
      imageSrc:
        'https://sikidang.com/wp-content/uploads/Taman-Mini-Indonesia-Indah-1.jpg',
      description:
        'Obyek wisata di Jakarta paling rekomended dan sayang untuk anda lewatkan ketika berlibur bersama keluarga yaitu Taman Mini Indonesia Indah. Banyak spot menarik yang akan memanjakan perjalanan wisata anda di Jakarta.',
      location: 'Jakarta Timur, DKI Jakarta.',
    },
  ],
  restaurant: [
    {
      id: '1',
      title: 'Payakumbuah',
      imageSrc:
        'https://katasumbar.com/wp-content/uploads/2022/05/IMG_20220520_210045.jpg',
      description: 'Rumah Makan Padang',
      location: 'Jakarta',
    },
    {
      id: '2',
      title: 'Tempo Doeloe',
      imageSrc:
        'https://fastly.4sqi.net/img/general/600x600/4472144_mVyGXmUfXD4HblhBiKhiupH_agYybwGIYuhkmfp0Wo4.jpg',
      description:
        'Restoran ini menawarkan soto ayam, risoles, sate ayam, hingga perkedel jagung.',
      location: 'Jakarta',
    },
    {
      id: '3',
      title: 'Talaga Sampireun',
      imageSrc:
        'https://images.tokopedia.net/img/JFrBQq/2022/4/14/ce866ac2-8ae6-40d6-9b99-edd80fc1cb19.jpg',
      description:
        'Talaga Sampireun merupakan restoran yang sudah cukup terkenal di Indonesia. Restoran ini dikenal dengan suasananya yang asri dan alami. Kamu bisa menyantap makanannya yang lezat sambil menikmati pemandangan kolam. Restoran ini memiliki 3 cabang, yakni di Ancol, Puri, dan Bintaro. Hidangan-hidangan khas Jawa Barat beserta seafood membuat restoran ini cocok untuk makan bersama rombongan.',
      location: ' Jl. Lapangan Golf 7, Ancol, Kec. Pademangan, Jakarta Utara',
    },
    {
      id: '4',
      title: ' Al Jazeerah',
      imageSrc:
        'https://images.tokopedia.net/img/JFrBQq/2022/4/14/1f2b80a0-496c-4177-a36c-26e65503120c.jpg',
      description:
        'Al Jazeerah merupakan restoran yang menawarkan hidangan beserta suasana Timur Tengah. Di dalam tempat ini, kamu akan merasa seperti berada di negara Arab. Salah satu hidangan andalan Al Jazeerah adalah nasi kebuli yang disajikan dengan daging kambing.',
      location: 'Jl. Johar No.8, Kb. Sirih, Kec. Menteng, Jakarta Pusat',
    },
    {
      id: '5',
      title: 'Shabu Ghin',
      imageSrc:
        'https://images.tokopedia.net/img/JFrBQq/2022/4/14/64194417-07b3-4321-9e74-cc0e3d09bab2.jpg',
      description:
        'Restoran ini adalah tempat all you can eat shabu-shabu yang menyediakan berbagai jenis daging berkualitas premium',
      location:
        'Jl. Wolter Monginsidi No. 53 Petogogan, Rw. Bar., Kec. Kby. Baru, Jakarta Selatan',
    },
  ],
};

export default data;
