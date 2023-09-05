
export default function Hackers() {
    const hackersArray = ['palak', 'sarvsh', 'Indigo']
    return (
        <main>
            {hackersArray.map((hacker) => {
                return (
                    <>
                        <h1 className="text-3xl">
                            {hacker}
                        </h1>
                    </>
                )

            })}
        </main>
    )
}