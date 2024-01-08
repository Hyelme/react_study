import React from 'react'
import Dialog from './\bDialog'
import CustomDialog from './CustomDialog'

export default function WelcomeDialog() {
//   return (
//     <Dialog>
//         <h1>Welcome</h1>
//         <h2>Thank you!</h2>
//     </Dialog>
//     )

    return (
        <CustomDialog title="Welcome" description="Thnak you!" />
    )
}
