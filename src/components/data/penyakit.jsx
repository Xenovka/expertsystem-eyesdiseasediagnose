const penyakit = [
    {
        nama: "Katarak",
        gejala: ["G01", "G08", "G16", "G28"],
        penjelasan: "Katarak adalah suatu penyakit ketika lensa mata menjadi keruh dan berawan. Pada umumnya, katarak berkembang perlahan dan awalnya tidak terasa mengganggu. Namun, lama-kelamaan, katarak akan mengganggu penglihatan dan membuat pengidap merasa seperti melihat jendela berkabut, sulit menyetir, membaca, serta melakukan aktivitas sehari-hari.",
        faktor: "Penuaan, riwayat trauma (masuknya serpihan tajam ke mata, terbentur bola, kembang api), infeksi saat kehamilan, kebiasaan merokok dan mengonsumsi alkohol, paparan sinar matahari yang lama pada mata.",
        solusi: "Ketika gejala sudah mengganggu aktivitas harian anda dan anda merasakan nyeri pada mata, segera konsultasikan dengan dokter."
    },
    {
        nama: "Dry eye (mata kering)",
        gejala: ["G05", "G20"],
        penjelasan: "Sindrom mata kering adalah kondisi ketika mata tidak mendapatkan pelumasan yang cukup dari air mata. Kondisi ini dapat menyebabkan rasa tidak nyaman di mata, bahkan bisa merusak permukaan bola mata.",
        faktor: "Penuaan, penyakit / kondisi tertentu (diabetes, kurang vitamin A, gangguan hormon tiroid, rheumatoid arthritis), konsumsi obat-obatan, kerusakan kelenjar air mata.",
        solusi: "Jika gejala mata kering baru pertama kali terjadi / sesekali, gunakan obat tetes mata, namun jika mata kering secara terus menerus dan tidak membaik, periksakan diri ke dokter."
    },
    {
        nama: "Glaukoma",
        gejala: ["G13", "G17", "G22", "G26"],
        penjelasan: "Glaukoma adalah jenis gangguan penglihatan yang ditandai dengan terjadinya kerusakan saraf mata. Kerusakan ini sering disebabkan oleh tekanan tinggi pada mata. Glaukoma yang tidak diobati dapat menyebabkan komplikasi kehilangan penglihatan permanen ataupun kebutaan. Tindakan perawatan dapat memperlambat kehilangan penglihatan tambahan, tetapi tidak dapat memulihkan penglihatan yang sudah hilang.",
        faktor: "Penuaan, memiliki riwayat keluarga pengidap glaukoma, pernah mengalami cedera mata, mengidap kondisi medis tertentu (diabetes, penyakit jantung, tekanan darah tinggi), menggunakan obat kortikosteroid (terutama obat tetes mata dalam jangka waktu yang lama).",
        solusi: "Segera periksakan diri ke dokter jika mengalami gejala. Jika keluarga memiliki gejala glaukoma, segera konsultasikan diri untuk mendapatkan penanganan yang tepat."
    },
    {
        nama: "Keratitis",
        gejala: ["G02", "G03", "G10", "G11", "G16"],
        penjelasan: "Peradangan pada kornea mata. Keratitis dibagi menjadi 2 yaitu keratitis noninfeksius dan keratitis infeksius. Keratitis non infeksius biasanya disebabkan oleh goresan dan cedera pada kornea mata, sementara keratitis infeksius disebabkan oleh infeksi virus, bakteri, jamur dan parasit.",
        faktor: "Memakai lensa kontak terlalu lama, memakai lensa kontak saat tidur / berenang, tidak membersihkan lensa kontak dengan baik, memiliki riwayat cedera pada kornea mata sebelumnya.",
        solusi: "Segera ke dokter jika Anda mengalami gejala yang ada. Keratitis yang tidak cepat diatasi bisa makin memburuk dan menyebabkan komplikasi serius, termasuk gangguan penglihatan permanen dan kebutaan."
    },
    {
        nama: "Myopia",
        gejala: ["G12", "G18", "G19", "G23"],
        penjelasan: "Rabun jauh atau miopi adalah gangguan pada penglihatan yang menyebabkan objek yang letaknya jauh terlihat kabur, tetapi tidak ada masalah melihat objek yang letaknya dekat. Miopi atau rabun jauh dikenal juga dengan istilah mata minus.",
        faktor: "Genetik, kurang sinar matahari, kekurangan vitamin D, kebiasaan membaca atau menonton terlalu dekat.",
        solusi: "Jika Anda mencurigai terjadinya perubahan atau penurunan kemampuan penglihatan, segera periksakan ke dokter,misalnya jika tidak bisa melihat tulisan atau benda-benda jauh yang biasanya terlihat."
    },
    {
        nama: "Pterygium",
        gejala: ["G02", "G09", "G24"],
        penjelasan: "Penyakit mata yang ditandai dengan tumbuhnya selaput pada bagian putih bola mata yang bisa mencapai kornea. Kondisi ini dapat terjadi pada salah satu mata saja atau kedua mata sekaligus.",
        faktor: "Belum diketahui secara pasti penyebab dari penyakit ini. Namun, terlalu banyak paparan sinar ultraviolet dinilai dapat menjadi penyebab kondisi ini.",
        solusi: "Pemeriksaan sebaiknya segera dilakukan saat gejala muncul untuk mencegah pterigium tumbuh makin tebal dan lebar. Jika Anda pernah menderita pterigium, munculnya kembali gejala juga harus diwaspadai. Pterigium dapat berawal dari pinguecula. Oleh sebab itu, jika muncul gejala pinguecula, lakukan pemeriksaan ke dokter untuk mencegah terjadinya kondisi ini. Gejala tersebut meliputi: Bercak kekuningan di bagian putih mata, Mata merah, Mata terasa kering, perih, dan gatal, Seperti ada pasir pada mata",
    },
    {
        nama: "Hypermetropi",
        gejala: ["G12", "G21", "G25"],
        penjelasan: "Gangguan penglihatan jarak dekat. Pada penderita hipermetropi, objek yang jauh terlihat jelas, tetapi objek yang dekat justru terlihat tidak jelas atau buram.",
        faktor: "Memiliki orang tua yang menderita hipermetropi, penuaan, menderita penyakit tertentu (diabetes, micropthalmia, kanker di sekitar mata)",
        solusi: "Seseorang yang berisiko tinggi menderita penyakit mata, misalnya glaukoma, dianjurkan untuk menjalani pemeriksaan mata rutin setiap 1 atau 2 tahun sekali sejak usia 40 tahun. Segera periksakan diri ke dokter mata jika gejala hipermetropi sampai mengganggu aktivitas. Pemeriksaan mata harus segera dilakukan apabila penglihatan terganggu secara tiba-tiba."
    },
    {
        nama: "Astigmatisma",
        gejala: ["G01", "G27"],
        penjelasan: "Gangguan penglihatan akibat kelainan pada kelengkungan kornea atau lensa mata. Kondisi ini menyebabkan pandangan kabur atau menyimpang, baik dalam jarak dekat maupun jauh.",
        faktor: "Rabun jauh / dekat yang sudah parah, riwayat astigmatisma pada keluarga, riwayat cedera mata / operasi mata, penipisan lapisan kornea",
        solusi: "Lakukan pemeriksaan ke dokter mata jika Anda atau anak Anda mengalami gejala astigmatisma, terutama jika gejala tersebut menganggu aktivitas sehari-hari, seperti membaca atau mengemudi."
    },
    {
        nama: "Retinal Detachment",
        gejala: ["G01", "G18", "G29", "G30"],
        penjelasan: "Kondisi terlepasnya retina dari bagian belakang mata. Kondisi ini tergolong darurat sehingga harus segera ditangani. Jika tidak, ablasi retina dapat menyebabkan kebutaan permanen.",
        faktor: "Penuaan, memiliki riwayat ablasi retina pada keluarga, mengalami cedera parah pada mata, menderita rabun jauh yang parah, pernah menjalani operasi pada mata.",
        solusi: "Ablasi retina tergolong kondisi darurat. Oleh karena itu, segera ke dokter jika Anda mengalami gejala yang telah disebutkan di atas, agar penanganan dapat segera dilakukan. Hal tersebut dapat mencegah terjadinya kebutaan permanen."
    },
    {
        nama: "Alergi Mata Merah (Allergic Conjunctivitis)",
        gejala: ["G01", "G02", "G09", "G10", "G20"],
        penjelasan: "Peradangan pada selaput mata (conjungtiva) yang disebabkan oleh alergi. Meskipun penyebab alergi berbeda-beda, serbuk sari merupakan penyebab musiman yang umum.",
        faktor: "Debu perumahan, serbuk sari dari pohon ataupun rumput, spora yang dihasilkan oleh jamur, bulu binatang.",
        solusi: "Pakai obat tetes mata 4 - 6 kali sehari untuk meredakan mata gatal akibat alergi. Konsumsi obat obatan seperti loratadin dan cetirizine. Mengompres mata dengan air dingin, ketika sudah terbentuk kerak pada mata, kompress dengan air hangat."
    },
    {
        nama: "Corneal Abrasion",
        gejala: ["G09", "G23", "G31"],
        penjelasan: "Abrasi kornea atau juga disebut sebagai mata tergores atau kornea tergores adalah cedera mata yang menyebabkan ketidaknyamanan yang signifikan, fotofobia, dan eritema. Hal ini terjadi bila ada gangguan pada epitel kornea yang disebabkan oleh trauma lensa kontak atau benda asing, atau secara spontan.",
        faktor: "Mata tertusuk oleh benda ( kuku, pulpen, dll), Kotoran / debu / pasir masuk ke dalam mata, Mengusap mata terlalu kencang, memakai lensa kontak terlalu lama, cairan kimia masuk ke mata.",
        solusi: "Jika terasa seperti ada sesuatu di mata anda, kedipkanlah mata anda beberapa kali, tarik kelopak bawah / atas mata anda secara pelan - pelan, basuh mata menggunakan air yang bersih atau cairan salinasi. Jika solusi tersebut masih belum membantu, konsultasikan segera dengan dokter."
    },
    {
        nama: "Corneal Ulcers",
        gejala: ["G09", "G32", "G33", "G34"],
        penjelasan: "Suatu kondisi ketika terdapat luka terbuka pada kornea. Umumnya, hal ini disebabkan oleh infeksi pada kornea yang dikenal dengan istilah keratitis.",
        faktor: "Infeksi bakteri pada orang yang menggunakan lensa kontak, infeksi virus seperti herpes simplex virus atau virus varicella, mata kering, menggunakan lensa kontak yang tidak steril, dan kekurangan vitamin A.",
        solusi: "konsumsi obat antivirus, antibiotik, atau antijamur sesuai dengan kondisi yang mendasarinya. memakai kacamata pelindung, dan membatasi penyebaran infeksi dengan mencuci tangan secara rutin dan mengeringkannya dengan handuk yang bersih. Jika gejala sudah parah, konsultasikan dengan dokter."
    }
]

export default penyakit;