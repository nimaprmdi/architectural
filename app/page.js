import Advertise from "@/components/Advertise";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import LastestProjects from "@/components/LastestProjects";
import SelectedWorks from "@/components/SelectedWorks";

import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

export default async function Home() {
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>

    // <section className="w-100">
    //   <Hero data={data.home.projects} className="w-3/4" />
    //   <Cta data={data.home.abouts} />
    //   <SelectedWorks data={data.home.projects} />
    //   <Advertise data={data.home.abouts} />
    //   <LastestProjects data={data.home.projects} />
    //   {/* <Clients /> */}
    // </section>
  );
}
