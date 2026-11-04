import SectionTitle from "../components/SectionTitle";


export default function AdminUsers({ users }) {

    const members = users.filter(
        (user) => user.role !== "admin"
    );


    return (

        <>

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