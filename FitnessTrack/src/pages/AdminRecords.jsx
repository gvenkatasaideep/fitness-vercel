import SectionTitle from "../components/SectionTitle";


export default function AdminRecords({ records }) {

    return (

        <>

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