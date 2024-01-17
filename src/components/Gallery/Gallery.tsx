

const Gallery = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 h-full">

            {/* container1 */}
            <div className="grid gap-4">
                <div>
                    <img src="women1.webp" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre2.webp" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre1.webp" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container2 */}

            <div className="grid gap-2">
                <div>
                    <img src="women2.webp" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre2.webp" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women2.webp" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container3 */}

            <div className="grid gap-4">
                <div>
                    <img src="hombre2.webp" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women2.webp" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women1.webp" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>

            {/* container4 */}

            <div className="grid gap-4">
                <div>
                    <img src="hombre1.webp" alt="women1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="women2.webp" alt="women2" className="h-auto max-w-full rounded-xl shadow" />
                </div>
                <div>
                    <img src="hombre2.webp" alt="hombre1" className="h-auto max-w-full rounded-xl shadow" />
                </div>
            </div>


        </div>
    )
}

export default Gallery