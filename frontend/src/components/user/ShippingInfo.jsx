import { Country, State } from "country-state-city";

function ShippingInfo({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  zipCode,
  setZipCode,
}) {
  return (
    <div>
      <div className="w-full bg-white rounded-md p-5 pb-8">
        <h5 className="text-[18px] font-[500]">Shipping Address</h5>
        <br />
        <form>
          <div className="w-full md:flex pb-3">
            <div className="w-[50%] pb-3">
              <label className="block md:pb-2">Full Name</label>
              <input
                type="text"
                required
                value={user && user.name}
                className={`w-[95%] outline-teal-700 p-2`}
              />
            </div>
            <div className="w-[50%]">
              <label className="block md:pb-2">Email Address</label>
              <input type="email" value={user && user.email} required className="outline-teal-700 p-2"/>
            </div>
          </div>

          <div className="w-full flex pb-3">
            <div className="w-[50%]">
              <label className="block pb-2">Zip Code</label>
              <input
                className="outline-teal-700 p-2"
                type="number"
                required
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full md:flex pb-3">
            <div className="w-[50%]">
              <label className="block md:pb-2">Country</label>
              <select
                className="w-[95%] border h-[40px] rounded-[5px]"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                required
              >
                <option className="block pb-2" value="">
                  Choose your country
                </option>
                {Country &&
                  Country.getAllCountries().map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="w-[50%] pb-2">
              <label className="block md:pb-2">City</label>
              <select
                className="w-[95%] border h-[40px] rounded-[5px]"
                required
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option className="block pb-2" value="">
                  Choose your City
                </option>
                {State &&
                  State.getStatesOfCountry(country).map((item) => (
                    <option key={item.isoCode} value={item.isoCode}>
                      {item.name}
                    </option>
                  ))}
              </select>
            </div>
          </div>

          <div className="w-full md:flex pb-3">
            <div className="w-[50%]">
              <label className="block pb-2">Address1</label>
              <input
                className="outline-teal-700 p-2"
                type="address"
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>
            <div className="w-[50%]">
              <label className="block pb-2">Address2</label>
              <input
              required
                className="outline-teal-700 p-2"
                type="address"
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>
          </div>

          <div></div>
        </form>
        <h5
          className="text-[18px] cursor-pointer inline-block"
          onClick={() => setUserInfo(!userInfo)}
        >
          Choose From saved address
        </h5>
        {userInfo && (
          <div>
            {user &&
              user.addresses &&
              user.addresses.map((item, index) => (
                <div className="flex gap-2">
                  <input
                    type="checkbox"
                    value={item.addressType}
                    onClick={() =>
                      setAddress1(item.address1) ||
                      setAddress2(item.address2) ||
                      setZipCode(item.zipCode) ||
                      setCountry(item.country) ||
                      setCity(item.city)
                    }
                  />
                  <h2>{item.addressType}</h2>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ShippingInfo;