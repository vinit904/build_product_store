import './create.css'

function CreatePage() {
  return (
    <>
      <div class="container" >
        <h2>Create New Product</h2>
        <form>
          <input type="text" placeholder="Product Name" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Image URL" />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>

  );
}

export default CreatePage;