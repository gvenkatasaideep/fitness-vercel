import SectionTitle from "../components/SectionTitle";


export default function AdminUsers({ users }) {

    const members = users.filter(
        (user) => user.role !== "admin"
    );


    return (

        <>
        <div className="container mt-4">
  <h2 className="mb-4">Manage Users</h2>

  <div className="table-responsive">
    <table className="table table-striped table-bordered">
      <thead className="table-dark">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Demo User</td>
          <td>user@example.com</td>
          <td>User</td>
          <td>
            <button className="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            <SectionTitle
                title="Manage users"
                subtitle="View the member accounts registered in FitTrack."
            />


            <section className="panel">

                <div className="panel-heading">

                    <h3>Registered members</h3>

                    <span className="count-pill">
                        {members.length} users
                    </span>

                </div>


                {members.length === 0 ? (

                    <p className="empty-state">
                        No member accounts have been created yet.
                    </p>

                ) : (

                    <div className="table-wrap">

                        <table>

                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Account type</th>
                                </tr>
                            </thead>


                            <tbody>

                                {members.map((member) => (

                                    <tr key={member.id}>

                                        <td>{member.name}</td>

                                        <td>{member.email}</td>

                                        <td>
                                            <span className="tag">
                                                Member
                                            </span>
                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </>

    );

}