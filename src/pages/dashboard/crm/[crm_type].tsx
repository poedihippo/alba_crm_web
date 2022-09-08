import { useRouter } from 'next/router'
import React from 'react'
import Leads from './leads';
import TitleSection from 'src/features/dashboard/crm/ui/components/titlesection'
import SearchSection from 'src/features/dashboard/crm/ui/components/searchsection'
import OptionSection from 'src/features/dashboard/crm/ui/components/optionssection'
import TableSection from 'src/features/dashboard/crm/ui/components/tablesection'

const Crm = () => {
  const router = useRouter()

  const {crm_type}:any = router.query;
  console.log(crm_type)
  return crm_type === 'unhandled' ?
    <div>
        <TitleSection title={ crm_type} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <SearchSection /> 
            <div style={{ }}>
                <OptionSection />
                <OptionSection />
                <OptionSection />
                <OptionSection />
                <OptionSection />
            </div>
        </div>
        <TableSection />
    </div>
  : <div>
        <TitleSection title={crm_type} />
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <SearchSection /> 
            <div style={{ }}>
                <OptionSection />
                <OptionSection />
                <OptionSection />
                
            </div>
        </div>
        <TableSection />
    </div>
}

export default Crm