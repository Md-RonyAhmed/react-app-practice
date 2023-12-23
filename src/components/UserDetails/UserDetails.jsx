import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const {
    name,
    email,
    website,
    company: { name: companyName },
  } = useLoaderData();

  return (
    <div>
      <div className="flex flex-col items-center rounded-md border md:flex-row">
        <div className="h-full w-full md:h-[600px] md:w-[1000px]">
          <img
            src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
            alt="Laptop"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-center text-lg font-semibold">
              {name}
            </h1>
            <p className="mt-3 text-sm text-gray-600">Email: {email}</p>
            <div className="mt-4">
              <small>Web address: {website}</small>
              <h3>Company: {companyName}</h3>
            </div>
            <div className="mt-3 flex items-center space-x-2">
              <img
                className="inline-block h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                alt="Dan_Abromov"
              />
              <span className="flex flex-col">
                <span className="text-[10px] font-medium text-gray-900">
                  Dan Abromov
                </span>
                <span className="text-[8px] font-medium text-gray-500">
                  @dan_abromov
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
