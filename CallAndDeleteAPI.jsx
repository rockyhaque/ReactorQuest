import axios from "axios";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import FullScreenLoader from "../loader/FullScreenLoader";

// FullScreenLoader is just a simple loader

const ReadPage = () => {
  const [productData, setProductData] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    readAPI();
  }, [refresh]);

  const readAPI = async () => {
    let res = await axios.get("https://crud.teamrabbil.com/api/v1/ReadProduct");
    let productList = res.data["data"];
    setProductData(productList);
    setLoading(false);
  };

  const onDeleteClick = async (id) => {
    setLoading(true);
    let res = await axios.get(
      `https://crud.teamrabbil.com/api/v1/DeleteProduct/${id}`
    );
    let deleteStatus = res.data["status"];
    if (deleteStatus === "success") {
      toast.success("Delete Success");
      setRefresh(refresh + 1);
    } else {
      setLoading(false);
      toast.error("Delete Failed!");
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2>Product List</h2>
            <button
              onClick={() => setRefresh(refresh + 1)}
              className="btn btn-primary"
            >
              Refresh
            </button>
            <hr />
            <div className="table-responsive">
              <table className="table table-striped">
                <tbody>
                  {productData.length > 0 &&
                    productData.map((item, idx) => {
                      return (
                        <tr key={idx}>
                          {/* <td>{item['_id']}</td> */}
                          <td>{item["ProductName"]}</td>
                          <td>
                            <img
                              style={{ width: "40px", height: "auto" }}
                              src={item["Img"]}
                              alt="img"
                            />
                          </td>
                          <td>{item["UnitPrice"]}</td>
                          <td>{item["Qty"]}</td>
                          <td>{item["TotalPrice"]}</td>
                          <td>{item["CreatedDate"]}</td>
                          <button
                            onClick={() => onDeleteClick(item["_id"])}
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {loading && <FullScreenLoader></FullScreenLoader>}
      <Toaster />
    </div>
  );
};

export default ReadPage;
