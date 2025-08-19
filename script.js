document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("item-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalJson = document.getElementById("modal-json");
  const closeModalBtn = document.getElementById("modal-close");
  const projectsContainer = document.getElementById("projects");

  const personalData = {
    about: {
      title: "/about_me",
      content: {
        status:
          "Mahasiswa Informatika dengan ketertarikan kuat dalam pengembangan backend.",
        summary:
          "Sangat antusias untuk belajar cepat, beradaptasi dengan teknologi baru, dan bersemangat untuk memberikan kontribusi nyata dalam setiap proyek pengembangan backend..",
        current_learning:
          "Saat ini sedang aktif memperdalam Go (Golang) untuk membangun layanan backend yang lebih cepat dan efisien.",
        contact: {
          email: "rihsan900@gmail.com",
          github: "github.com/Isann22",
        },
      },
    },
    skills: {
      title: "/tech_stack",
      content: {
        languages: ["PHP", "JavaScript", "Node.js", "Go (Learning)"],
        frameworks_and_libraries: [
          "Laravel",
          "Livewire",
          "Express.js",
          "Bootstrap",
          "Tailwind CSS",
        ],
        databases_and_orms: ["MySQL", "Prisma"],
        tools: ["Git", "Docker(Learning)"],
      },
    },
  };

  const projectsData = [
    {
      id: "florist-pos",
      title: "FloristPOS - Sistem Manajemen Toko Bunga",
      path: "/projects/florist-pos",
      data: {
        objective:
          "Menghadirkan solusi Point of Sale (POS) modern yang mengotomatisasi seluruh alur kerja operasional toko bunga, dari transaksi penjualan hingga manajemen inventaris.",
        tech_stack: [
          "Laravel 11",
          "Livewire",
          "MySQL",
          "Tailwind CSS",
          "Flowbite UI",
        ],
        key_achievements: [
          "Transaksi Efisien: Mengintegrasikan payment gateway untuk memfasilitasi pembayaran non-tunai yang cepat dan aman.",
          "Pengalaman Pengguna Superior: Membangun fitur pencarian produk real-time dengan Livewire, secara drastis mengurangi waktu tunggu di kasir.",
          "Manajemen Inventaris Akurat: Mengembangkan modul stok cerdas untuk melacak ketersediaan bunga dan mencegah kehabisan stok.",
          "Desain Intuitif: Merancang antarmuka kasir yang bersih dan responsif untuk meminimalkan kurva belajar bagi staf.",
        ],
        repository_url: "github.com/Isann22/pos-app",
      },
    },
    {
      id: "esports-ticketing",
      title: "Sistem Manajemen Tiket Esports",
      path: "/projects/esports-ticketing",
      data: {
        objective:
          "Membangun platform terpusat untuk manajemen dan penjualan tiket acara esports, dengan fokus utama pada keamanan, skalabilitas, dan kemudahan penggunaan.",
        tech_stack: ["Laravel 11", "MySQL", "Blade", "Bootstrap", "Midtrans"],
        key_achievements: [
          "Alur Pembayaran: Mengimplementasikan Midtrans sebagai payment gateway utama, mendukung berbagai metode pembayaran untuk memaksimalkan penjualan tiket.",
          "Akses Mudah & Cepat: Mengintegrasikan Social Login (Google & GitHub) untuk menyederhanakan proses registrasi dan login pengguna.",
          "Keamanan Berlapis: Merancang dan menerapkan sistem Role-Based Access Control (RBAC) yang ketat untuk memisahkan hak akses antara Admin, Organizer, dan Pengguna.",
          "Kontrol Penuh Penyelenggara: Menyediakan dashboard analitik  untuk memantau penjualan tiket dan mengelola detail acara secara efisien.",
        ],
        // PERBAIKAN DI SINI: URL GitHub telah ditukar
        repository_url: "github.com/Isann22/E7-Project-UAS",
      },
    },
    {
      id: "void-flow",
      title: "VoidFlow - Asisten Mahasiswa",
      path: "/projects/void-flow",
      data: {
        objective:
          "Menciptakan toolkit produktivitas esensial bagi mahasiswa, mengintegrasikan fitur-fitur krusial seperti pencatatan, pelacakan finansial, dan pengingat dalam satu aplikasi.",
        tech_stack: [
          "Node.js",
          "Express.js",
          "Prisma",
          "Bootstrap",
          "Chart.js",
        ],
        key_achievements: [
          "Arsitektur Kokoh: Menerapkan pola desain Model-View-Controller (MVC) pada Node.js & Express untuk kode yang terorganisir dan mudah dipelihara.",
          "Interaksi Database Modern: Memanfaatkan Prisma sebagai ORM untuk menyederhanakan query ke database dan menjamin keamanan tipe data.",
          "Wawasan Finansial: Mengubah data pengeluaran mentah menjadi chart yang informatif dan interaktif menggunakan Chart.js.",
          "Otentikasi Aman: Menggunakan sistem otentikasi berbasis session untuk melindungi data dan privasi setiap pengguna.",
        ],
        repository_url: "github.com/Isann22/void_flow",
      },
    },
  ];

  const openModal = (title, jsonData) => {
    modalTitle.textContent = title;
    const jsonString = JSON.stringify(jsonData, null, 2);
    modalJson.innerHTML = syntaxHighlight(jsonString);
    modal.classList.add("active");
  };

  const closeModal = () => {
    modal.classList.remove("active");
  };

  function syntaxHighlight(json) {
    json = json
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    return json.replace(
      /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
      function (match) {
        let cls = "json-boolean";
        if (/^"/.test(match)) {
          if (/:$/.test(match)) {
            cls = "json-key";
          } else {
            cls = "json-string";
            const urlPattern =
              /"((https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-\._~:/?#[\]@!$&'()*+,;=]+)"/;
            const emailPattern =
              /"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"/;
            if (urlPattern.test(match) && !emailPattern.test(match)) {
              const url = match.slice(1, -1);
              const href = url.startsWith("http") ? url : `https://${url}`;
              return `<a href="${href}" target="_blank" class="json-string-link">"${url}"</a>`;
            }
            if (emailPattern.test(match)) {
              const email = match.slice(1, -1);
              return `<a href="mailto:${email}" class="json-string-link">"${email}"</a>`;
            }
          }
        }
        return '<span class="' + cls + '">' + match + "</span>";
      }
    );
  }

  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.className = "info-item project-item";
    projectElement.innerHTML = `
            <div class="info-item-header">
                <span class="method get">GET</span>
                <span class="path">${project.path}</span>
            </div>
        `;
    projectElement.addEventListener("click", () =>
      openModal(project.title, project.data)
    );
    projectsContainer.appendChild(projectElement);
  });

  document.getElementById("about-me-item").addEventListener("click", () => {
    openModal(personalData.about.title, personalData.about.content);
  });

  document.getElementById("skills-item").addEventListener("click", () => {
    openModal(personalData.skills.title, personalData.skills.content);
  });

  closeModalBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });
});
