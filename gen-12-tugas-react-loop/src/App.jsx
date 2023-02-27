import { useState } from "react";

function App() {
  const [obat, setObat] = useState([
    {
      kode: "P000001",
      jenis: "Tablet",
      nama: "Paracetamol",
      exp: "03-03-2024",
      harga: 7500,
    },
    {
      kode: "P000002",
      jenis: "Tablet",
      nama: "Enervon C",
      exp: "05-05-2024",
      harga: 8000,
    },
    {
      kode: "P000003",
      jenis: "Tablet",
      nama: "Imboost",
      exp: "04-04-2024",
      harga: 20000,
    },
  ]);

  const [kode, setKode] = useState("");
  const [jenis, setJenis] = useState("");
  const [nama, setNama] = useState("");
  const [exp, setExp] = useState("");
  const [harga, setHarga] = useState("");

  const addObat = (event) => {
    event.preventDefault();
    const inputObat = { kode, jenis, nama, exp, harga };
    const copyObat = [...obat];
    copyObat.push(inputObat);

    setObat(copyObat);
    setKode("");
    setJenis("");
    setNama("");
    setExp("");
    setHarga("");
  };

  const removeObat = (removeId) => {
    const obatIndex = obat.findIndex((obat) => obat.kode === removeId);
    const copyObat = [...obat];
    copyObat.splice(obatIndex, 1);
    setObat(copyObat);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={(event) => addObat(event)}>
          <h1>Data Obat</h1>
          <div>
            <label>Kode: </label> <br />
            <input type="text" value={kode} onChange={(event) => setKode(event.target.value)} required />
          </div>
          <div>
            <label>Jenis: </label> <br />
            <input type="text" value={jenis} onChange={(event) => setJenis(event.target.value)} />
          </div>
          <div>
            <label>Nama: </label> <br />
            <input type="text" value={nama} onChange={(event) => setNama(event.target.value)} />
          </div>
          <div>
            <label>Expired: </label> <br />
            <input type="date" value={exp} onChange={(event) => setExp(event.target.value)} />
          </div>
          <div>
            <label>Harga: </label> <br />
            <input type="text" value={harga} onChange={(event) => setHarga(event.target.value)} />
          </div>
          <br />
          <button type="submit">Simpan</button>
        </form>
      </div>
      <div>
        {obat.map((obat) => (
          <p key={obat.kode}>
            {obat.kode} | {obat.nama} | {obat.jenis} | Exp: {obat.exp} | Rp{obat.harga} &nbsp;
            <button onClick={() => removeObat(obat.kode)}>Remove</button>
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
