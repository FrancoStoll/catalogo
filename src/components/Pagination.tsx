interface PaginationProps {
    productsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    totalProducts: number | undefined;
}



const Pagination = ({ productsPerPage, currentPage, setCurrentPage, totalProducts }: PaginationProps) => {



    const pageNumer = [];


    for (let i = 1; i <= Math.ceil((totalProducts || 0) / productsPerPage); i++) {
        pageNumer.push(i)
    }





    const onPreviousPage = () => {
        setCurrentPage(currentPage - 1)
    }

    const onNextPage = () => {
        setCurrentPage(currentPage + 1)
    }

    const onSpecificPage = (numero: number) => {
        setCurrentPage(numero)
    }


    return (
        <nav className="pagination is-centered py-10 container mx-auto" role="navigation" aria-label="pagination">
            <button className={`pagination-previous ${currentPage === 1 ? 'is-disabled' : ''}`} onClick={onPreviousPage}>Anterior</button>
            <button className={`pagination-next ${currentPage >= pageNumer.length ? 'is-disabled' : ''}`} onClick={onNextPage}>Siguiente</button>
            <ul className="pagination-list">

                {pageNumer.map(nPage => (
                    <li onClick={() => onSpecificPage(nPage)} key={nPage}><a className={`pagination-link ${nPage === currentPage ? 'is-current' : ''}`} aria-label="Goto page 1">{nPage}</a></li>
                ))}


            </ul>
        </nav >
    )
}

export default Pagination