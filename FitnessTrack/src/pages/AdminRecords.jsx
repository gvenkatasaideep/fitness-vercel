import SectionTitle from "../components/SectionTitle";


export default function AdminRecords({ records }) {

    return (

        <>
        <div className="container mt-4">
  <h2 className="mb-4">Activity Records</h2>

  <div className="table-responsive">
    <table className="table table-hover table-bordered">
      <thead className="table-dark">
        <tr>
          <th>User</th>
          <th>Steps</th>
          <th>Calories</th>
          <th>Active Minutes</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Demo User</td>
          <td>5000</td>
          <td>350</td>
          <td>45</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

            <SectionTitle
                title="Fitness records"
                subtitle="Review activity records submitted by FitTrack members."
            />


            <section className="panel">

                <div className="panel-heading">

                    <h3>All activity records</h3>

                    <span className="count-pill">
                        {records.length} records
                    </span>

                </div>


                {records.length === 0 ? (

                    <p className="empty-state">
                        No fitness records have been submitted yet.
                    </p>

                ) : (

                    <div className="table-wrap">

                        <table>

                            <thead>
                                <tr>
                                    <th>Member</th>
                                    <th>Date</th>
                                    <th>Steps</th>
                                    <th>Calories</th>
                                    <th>Minutes</th>
                                </tr>
                            </thead>


                            <tbody>

                                {records.slice().reverse().map(
                                    (record, index) => (

                                        <tr
                                            key={`${record.userEmail}-${record.date}-${index}`}
                                        >

                                            <td>{record.userName}</td>

                                            <td>{record.date}</td>

                                            <td>{record.steps}</td>

                                            <td>{record.calories}</td>

                                            <td>{record.minutes}</td>

                                        </tr>

                                    )
                                )}

                            </tbody>

                        </table>

                    </div>

                )}

            </section>

        </>

    );

}