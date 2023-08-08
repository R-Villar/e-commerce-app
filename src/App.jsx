import { createBrowserRouter, RouterProvider } from "react-router-dom"

const router = createBrowserRouter([
	{
		path: "/",
		element: <div>Home</div>,
	},
	{
		path: "/products/:id",
		element: <div>Categories</div>,
	},
	{
		path: "/product/:id",
		element: <div>Product</div>,
	},
])

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	)
}

export default App
