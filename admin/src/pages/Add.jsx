import React, { useState } from "react";
import placeholder from "../assets/image2.png";
import axios from "axios";
import { backendUrl } from './../App';
import { toast } from "react-toastify";

const Add = ({token}) => {
  const [image1, setImage1] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
  const [image4, setImage4] = useState(null);


  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Men");
  const [subCategory, setSubCategory] = useState("Topwear");
  const [bestSeller, setBestSeller] = useState(false);
  const [sizes, setSizes] = useState([]);


 

  const toggleSize = (size) => {
    setSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    

const formData = new FormData();
formData.append('name', name);
formData.append('description', description);
formData.append('price', price);
formData.append('category', category);
formData.append('subCategory', subCategory);
formData.append('bestSeller', bestSeller);
formData.append('sizes', JSON.stringify(sizes));

// Append images if they exist
if (image1) formData.append('image1', image1);
if (image2) formData.append('image2', image2);
if (image3) formData.append('image3', image3);
if (image4) formData.append('image4', image4);

try {
 const token = localStorage.getItem("token");


 const response = await axios.post(
  backendUrl + "/api/product/add",
  formData,
  {
   headers: {
  Authorization: `Bearer ${token}`
}

  }
  
);
console.log(response.data)
if(response.data.success){
  toast.success(response.data.message)
  setName("")
  setDescription("")
  setImage1(false)
  setImage2(false)
  setImage3(false)
  setImage4(false)
}else{
  toast.error(response.data.message)
}

 
} catch (error) {
  console.error( error);
  toast.error(error.message)
}
  };

  return (
    <div className="p-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-full items-start gap-4"
      >
        {/* Upload Images */}
        <div>
          <p className="mb-2">Upload Images</p>
          <div className="flex gap-3">
            {[image1, image2, image3, image4].map((img, i) => (
              <label key={i} htmlFor={`image${i + 1}`}>
                <div className="w-20 bg-gray-700 p-2 rounded cursor-pointer">
                  <img
                    src={img ? URL.createObjectURL(img) : placeholder}
                    alt=""
                    className="w-full"
                  />
                </div>
                <input
                  type="file"
                  hidden
                  id={`image${i + 1}`}
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (i === 0) setImage1(file);
                    if (i === 1) setImage2(file);
                    if (i === 2) setImage3(file);
                    if (i === 3) setImage4(file);
                  }}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Product Name */}
        <div className="w-full">
          <p className="mb-2">Product Name</p>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2 border"
            type="text"
            placeholder="Type here"
            required
          />
        </div>

        {/* Description */}
        <div className="w-full">
          <p className="mb-2">Product Description</p>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full max-w-[500px] px-3 py-2 border"
            placeholder="Write content here"
            required
          />
        </div>

        {/* Category + Subcategory + Price */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <p>Category</p>
            <select
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2 border"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kids">Kids</option>
            </select>
          </div>

          <div>
            <p>Sub Category</p>
            <select
              onChange={(e) => setSubCategory(e.target.value)}
              className="px-3 py-2 border"
            >
              <option value="Topwear">Topwear</option>
              <option value="Bottomwear">Bottomwear</option>
              <option value="Winterwear">Winterwear</option>
            </select>
          </div>

          <div>
            <p>Price</p>
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="px-3 py-2 border w-[120px]"
              type="number"
              placeholder="39"
              required
            />
          </div>
        </div>

        {/* Sizes */}
        <div>
          <p className="mb-2">Product Sizes</p>
          <div className="flex gap-3">
            {["S", "M", "XL", "XXL"].map((size) => (
              <p
                key={size}
                onClick={() => toggleSize(size)}
                className={`px-3 py-1 cursor-pointer ${
                  sizes.includes(size)
                    ? "bg-pink-200"
                    : "bg-pink-300"
                }`}
              >
                {size}
              </p>
            ))}
          </div>
        </div>

        {/* Bestseller */}
        <div className="flex gap-2 items-center mt-2">
          <input
            type="checkbox"
            id="bestSeller"
            checked={bestSeller}
            onChange={(e) => setBestSeller(e.target.checked)}
          />
          <label htmlFor="bestSeller" className="cursor-pointer">
            Add to Bestseller
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-28 py-3 mt-4 bg-black text-white rounded-2xl"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
