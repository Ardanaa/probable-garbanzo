class Car {
    static list = [];

    static init(cars) {
        this.list = cars.map((i) => new this(i));
    }

    constructor({
        id,
        plate,
        manufacture,
        model,
        image,
        rentPerDay,
        capacity,
        description,
        transmission,
        available,
        type,
        year,
        options,
        specs,
        availableAt,
    }) {
        this.id = id;
        this.plate = plate;
        this.manufacture = manufacture;
        this.model = model;
        this.image = image;
        this.rentPerDay = rentPerDay;
        this.capacity = capacity;
        this.description = description;
        this.transmission = transmission;
        this.available = available;
        this.type = type;
        this.year = year;
        this.options = options;
        this.specs = specs;
        this.availableAt = availableAt;
    }

    render() {
            return `
      <div class="card mt-4">
        <img src="${this.image}" class="card-img-top" alt="${this.manufacture}" height="160px">
        <div class="card-body">
          <h5 class="nama-mobil"><b>${this.manufacture} ${this.model}</b></h5>
          <p class="harga-mobil"><b>Rp. ${this.rentPerDay} / hari</b></p>
          <p>${this.description}</p>
          <div class="tentang mt-1"><i class="mt-1 me-2 icon-mobil fa-solid bi-people">  ${this.capacity} People</i></div>
          <div class="tentang mt-1"><i class="mt-1 me-2 icon-mobil fa-solid bi-gear">  ${this.transmission}</i></div>
          <div class="tentang mt-1 mb-2"><i class="mt-1 me-2 icon-mobil fa-solid bi-calendar">  ${this.year}</i></div>
          <a href="#" class="btn btn-success d-flex justify-content-center tombol-mobil">Pilih Mobil</a>
        </div>
      </div>`;
        }
        // <p>plate: <b>${this.available}</b></p>
        // <p>plate: <b>${this.plate}</b></p>
        // <p>manufacture: <b>${this.manufacture}</b></p>
        // <p>model: <b>${this.model}</b></p>
        // <p>available at: <b>${this.availableAt}</b></p>
        // <img src="${this.image}" alt="${this.manufacture}" width="64px">
}