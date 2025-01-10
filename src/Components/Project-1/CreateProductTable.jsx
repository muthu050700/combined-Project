import { useDispatch, useSelector } from "react-redux";
import { Form, Input, Table } from "reactstrap";
import { v4 } from "uuid";
import { Link } from "react-router-dom";
import { addFormDetails } from "../Store/EditFormDetails";
import { addProduct } from "../Store/ProductDetailsSlice";

const initialDetails = {
  availabilityStatus: "",
  category: "",
  price: "",
  rating: "",
  returnPolicy: "",
  reviews: "",
  stock: "",
  title: "",
  warrentyInformation: "",
};
const UserCreateTable = () => {
  const formDetails = useSelector((store) => store.formDetails.formDetails);
  const disPatch = useDispatch();
  //form submit
  const handleCreateProductForm = (e) => {
    e.preventDefault();
    disPatch(addProduct(formDetails));
  };

  //editing the form details
  const handleFormDetailsChange = (e, index) => {
    const rows = [...formDetails];
    rows[index] = {
      ...formDetails[index],
      id: v4(),
      [e.target.name]: e.target.value,
    };
    disPatch(addFormDetails(rows));
  };

  return formDetails.length === 0 ? (
    <p className="text-center font-bold text-xl">
      Please add the row to create a product!!!
    </p>
  ) : (
    <div>
      <Form onSubmit={handleCreateProductForm}>
        <Table>
          <thead>
            <tr>
              <th>S In</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Warrenty Information</th>
              <th>Stock</th>
              <th>Return Policy</th>
              <th>Availability Status</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {formDetails.map((val, index) => {
              return (
                <>
                  <tr className="table-primary" key={index + 1}>
                    <td>{index + 1}</td>
                    <td>
                      <div>
                        <Input
                          id="title"
                          name="title"
                          placeholder="Enter a product title"
                          type="text"
                          value={formDetails[index].title}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="category"
                          name="category"
                          placeholder="Enter a category"
                          type="text"
                          value={formDetails[index].category}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="Price"
                          name="price"
                          placeholder="Enter a price"
                          type="number"
                          className=" w-[150px]"
                          value={formDetails[index].price}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="Rating"
                          name="rating"
                          placeholder="Enter a Rating"
                          type="number"
                          className=" w-[150px]"
                          value={formDetails[index].rating}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="warrenty"
                          name="warrentyInformation"
                          placeholder="Enter a warrentInfo"
                          type="text"
                          value={formDetails[index].warrentyInformation}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="Stock"
                          name="stock"
                          placeholder="Enter a Stock"
                          type="number"
                          value={formDetails[index].stock}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <div>
                        <Input
                          id="Return Policy"
                          name="returnPolicy"
                          placeholder="Enter a Return Policy"
                          type="text"
                          value={formDetails[index].returnPolicy}
                          onChange={(e) => handleFormDetailsChange(e, index)}
                        />
                      </div>
                    </td>
                    <td>
                      <select
                        name="availabilityStatus"
                        className="form-select"
                        value={formDetails[index].availabilityStatus}
                        onChange={(e) => handleFormDetailsChange(e, index)}
                      >
                        <option value="" disabled>
                          Select an option
                        </option>
                        <option value="inStock">In Stock</option>
                        <option value="lowStock">Low Stock</option>
                      </select>
                    </td>
                    <td>
                      <Input
                        id="exampleText"
                        name="reviews"
                        type="textarea"
                        placeholder="Enter the reviews"
                        value={formDetails[index].reviews}
                        onChange={(e) => handleFormDetailsChange(e, index)}
                      />
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <div className="flex justify-end mx-2 gap-3">
          <button className="bg-orange-500 px-2 py-1 rounded-md text-lg font-medium text-white">
            Add to the cart
          </button>
          <Link to="/showUser">
            <p className="bg-yellow-500 px-2 py-1 rounded-md text-lg font-medium text-white">
              View Products
            </p>
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default UserCreateTable;
