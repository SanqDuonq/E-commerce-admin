import { assets } from "../assets/assets";
import ButtonComponent from "../components/button";

const add = () => {
  return (
    <form className="flex flex-col w-full items-start gap-3">
      <div>
        <p className="mb-2">Upload Image</p>
        <div className="flex gap 2 ">
          <label htmlFor="image1">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image1" hidden />
          </label>
          <label htmlFor="image2">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image2" hidden />
          </label>
          <label htmlFor="image3">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image3" hidden />
          </label>
          <label htmlFor="image4">
            <img className="w-20" src={assets.upload_area} alt="" />
            <input type="file" id="image4" hidden />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product name</p>
        <input
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Type here"
          required
        />
      </div>
      <div className="w-full">
        <p className="mb-2">Product description</p>
        <textarea
          className="w-full max-w-[500px] px-3 py-2"
          type="text"
          placeholder="Write content"
          required
        />
      </div>
      <div className="flex flex-col sm:flex-row gap-2 w-full sm:gap-8">
        <div>
          <p className="mb-2">Product category</p>
          <select className="w-full px-3 py-2">
            <option value="Furniture">Furniture</option>
            <option value="Outdoor">Outdoor</option>
            <option value="Decor & Mirror">Decor & Mirror</option>
            <option value="Lighting">Lighting</option>
            <option value="Rugs">Rugs</option>
            <option value="Pillows & Throws">Pillows & Throws</option>
            <option value="Bedding & Bath">Bedding & Bath</option>
            <option value="Tabletop & Bar">Tabletop & Bar</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Color</p>
          <select className="w-full px-3 py-2">
            <option value="White">White</option>
            <option value="Gold">Gold</option>
            <option value="Black">Black</option>
            <option value="Clear">Clear</option>
            <option value="Natural">Natural</option>
            <option value="Brown">Brown</option>
            <option value="Off-White">Off-White</option>
            <option value="Green">Green</option>
            <option value="Grey">Grey</option>
            <option value="Grey">Multicolor</option>
          </select>
        </div>
        <div>
          <p className="mb-2">Product Price</p>
          <input
            className="w-full px-3 py-2 sm:w-[120px]"
            type="number"
            placeholder="price"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex gap-3">
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">
              up to 10 inches
            </p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">
              10 to 20 inches
            </p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">
              20 to 30 inches
            </p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">
              30 to 40 inches
            </p>
          </div>
          <div>
            <p className="bg-slate-200 px-3 py-1 cursor-pointer">
              40 to 50 inches
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input type="checkbox" id="bestseller" />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to bestseller
        </label>
      </div>
      <ButtonComponent name="ADD" />
    </form>
  );
};

export default add;
