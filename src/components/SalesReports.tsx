import { useEffect, useState } from "react";

export function SalesReports(fromDate:string, toDate: string){
    
    const [sellersList, setSellersList] = useState<TopSeller[]>([]);

    useEffect(() => {
        const loadingSalesPersons = async () => {
          let isMounted = true;
          try {
            const sellersList: TopSeller[] = await fetchTopSellers(
              fromDate,
              toDate
            );
            if (isMounted) setSellersList(sellersList);
          } catch (error) {
            console.error("Failed to fetch sellers list:", error);
            setSellersList([]);
          } finally {
            return () => {
              isMounted = false;
            };
          }
        };
        loadingSalesPersons();
      }, []);
    
    
    return<div className="reportsTable">
        <h3>Rapports de vente</h3>
        <table>
            <tr>
                <th>Status</th>
                <th>Status</th>
            </tr>
            {reportList.map(rep=>
                <tr>
                    <td></td>
                </tr>
                )}
        </table>
    </div>
}