import React from 'react';
import Header from './include/header';
import Footer from './include/footer';

function AdminLayout({children}) {
  return (
  <>

<div id="app">
          <div id="main">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
</div>
    {/* <main className="main">

    <main>{children}</main>

    </main>

    <Footer/> */}

    {/* Scroll Top */}
  </>
  )
}

export default AdminLayout