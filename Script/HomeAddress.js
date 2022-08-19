class HomeAddressData{
    get id(){return this._id}
    set id(id){
        this._id = id;
    }

    get street(){return this._street}
    set street(street){
        this._street = street;
    }

    get landmark(){return this._landmark}
    set landmark(landmark){
        this._landmark = landmark;
    }

    get city(){return this._city}
    set city(city){
        this._city = city;
    }

    get pincode(){return this._pincode}
    set pincode(pincode){
        this._pincode = pincode;
    }

    toString(){
        return "id= "+ this.id +", street= "+ this.street +", landmark= "+ this.landmark +
        ", city= "+ this.city +", pincode= "+ this.pincode;
    }
}