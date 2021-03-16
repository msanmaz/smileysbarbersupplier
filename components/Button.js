

export default function Button(props) {
    return (
        <>

            <button class="py-2 md:px-4 px-0 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">
                {props.purpose}
            </button>


        </>


    )
}