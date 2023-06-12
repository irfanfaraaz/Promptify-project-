import '@/styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Promptify',
    description: 'Super Prompts is a collection of AI prompts that allows you to discover and share various prompts.',
}

const RootLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className='main'>
                <div className='gradient' />
            </div>

            <main className='app'>
                <Nav/>
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout