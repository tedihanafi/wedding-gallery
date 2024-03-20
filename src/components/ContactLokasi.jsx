import { useState } from 'react';

const ContactLokasi = () => {
  const [formData, setFormData] = useState({
    nama: '',
    alamat: '',
    pesan: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim pesan ke WhatsApp
    const waNumber = '0895395316970';
    const message = `Nama: ${formData.nama}\nAlamat: ${formData.alamat}\nPesan: ${formData.pesan}`;
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`;
    window.open(waLink, '_blank');
  };

  return (
    <div className="lokasi-kontak">
      <h1>Lokasi Kami</h1>

      <div className="alamat-kontak">
        <div className="kontak-home">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="nama" className="form-label">Nama</label>
              <input type="text" className="form-control" id="nama" placeholder="Masukkan nama Anda" onChange={handleChange} value={formData.nama} />
            </div>
            <div className="mb-3">
              <label htmlFor="alamat" className="form-label">Alamat</label>
              <input type="text" className="form-control" id="alamat" placeholder="Masukkan alamat Anda" onChange={handleChange} value={formData.alamat} />
            </div>
            <div className="mb-3">
              <label htmlFor="pesan" className="form-label">Pesan</label>
              <textarea className="form-control" id="pesan" rows="3" placeholder="Tulis pesan Anda" onChange={handleChange} value={formData.pesan}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Kirim</button>
          </form>
        </div>

        <div className="alamat-home">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2231834164218!2d106.511235!3d-6.234283999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e42070d29868c97%3A0x8808ce93d37f248e!2sDiana%20irma%20make%20up%20%26%20wedding%20galery!5e0!3m2!1sid!2sid!4v1710260451913!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactLokasi;
