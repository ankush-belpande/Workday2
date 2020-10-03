import * as React from 'react';
import styles from './Workday2.module.scss';
import { IWorkday2Props } from './IWorkday2Props';
import'bootstrap/dist/css/bootstrap.min.css';
import'bootstrap/dist/js/bootstrap.bundle.min';
import { Button } from 'office-ui-fabric-react/lib/Button';
import { SearchBox } from 'office-ui-fabric-react/lib/SearchBox';


export default class Workday2 extends React.Component<IWorkday2Props, {}> {
  public render(): React.ReactElement<IWorkday2Props> {
    return (
      <div className={ styles.workday2 }>

              <tr className="trSrch">
                <td className="tdSrch">
                    <SearchBox
                      className="react-search-box">
                    </SearchBox>
                </td>
              </tr>
              
          <div className={ styles.container }>
          <div className={ styles.rowResult }>
            <span className={ styles.titleWhite }>Results</span>
          </div>
          
          <div className={ styles.rowTable }>
            
            <div className="table-responsive">
                        <table className="table">
                              <thead className=" text-primary thead-light">
                            <tr><th>
                                Result
                            </th>
                            <th>
                                Pariod
                            </th>
                            <th>
                                Payroll Account Number
                            </th>
                            <th>
                                Payment Date/Reversal Date
                            </th>
                            <th>
                                Sub Period (if Partial Period)
                            </th>
                            <th>
                                Pay Group Details
                            </th>
                            <th>
                                Primary Position
                            </th>
                        </tr></thead>
                        <tbody>
                            <tr>
                                <td>
                                    <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                            <i className="material-icons">search</i>
                                    </button>    
                                </td>
                                <td>
                                    
                                    16-30 Apr 2018                                                    
                                </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>    
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                   
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>     
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                  
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>    
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                   
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td> 
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                      
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                <td>
                                    10,000.00
                                </td>
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>  
                                <td>
                                    1,000.00
                                </td>
                                <td>
                                    9,000.00
                                </td>                                                     
                            </tr>
                            <tr>
                                    <td>
                                            <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                    <i className="material-icons">search</i>
                                            </button>    
                                        </td>
                                        <td>
                                            
                                            16-30 Apr 2018                                                    
                                        </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                <tr>
                                        <td>
                                                <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                        <i className="material-icons">search</i>
                                                </button>    
                                            </td>
                                            <td>
                                                
                                                16-30 Apr 2018                                                    
                                            </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                <tr>
                                        <td>
                                                <button type="button" className="btn btn-primary btn-sm" data-toggle="modal" data-target="#exampleModal">
                                                        <i className="material-icons">search</i>
                                                </button>    
                                            </td>
                                            <td>
                                                
                                                16-30 Apr 2018                                                    
                                            </td>
                                    <td>
                                        10,000.00
                                    </td>
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>  
                                    <td>
                                        1,000.00
                                    </td>
                                    <td>
                                        9,000.00
                                    </td>                                                     
                                </tr>
                                    
                        </tbody>
                    </table>
                </div>
          </div>
          </div>
        </div>
      
    );
  }
}
