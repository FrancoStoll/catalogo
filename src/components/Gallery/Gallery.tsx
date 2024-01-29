

const Gallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-full">

            {/* container1 */}
            <div className="grid gap-4">
                <div>
                    <img src="women1.jpg" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre2.jpg" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre1.jpg" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container2 */}

            <div className="grid gap-2">
                <div>
                    <img src="women2.jpg" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women1.jpg" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women4.jpg" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container3 */}

            <div className="grid gap-4">
                <div>
                    <img src="hombre2.jpg" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women2.jpg" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women1.jpg" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container4 */}

            <div className="grid gap-4">
                <div>
                    <img src="women4.jpg" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre1.jpg" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women3.jpg" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>


        </div>
    )
}

export default Gallery