/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, CalculatorIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Services', href: '#services', current: false },
    { name: 'About', href: '#about', current: false },
    { name: 'FAQ', href: '#faq', current: false },
    { name: 'Testimonials', href: '#contact', current: false },
    { name: 'Gallery', href: '#gallery', current: false },
    { name: 'Contact', href: '#contact', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="bg-transparent z-50 absolute w-full">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mt-2  mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white bg-darkBlue focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start ">
                                <div className="flex-shrink-0 flex items-center">
                                    <img src="/images/logo.jpeg" alt="" className='h-10 w-10 rounded-full overflow-hidden' />
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    item.current ? ' text-darkBlue text-xl' : 'text-white hover:text-darkBlue',
                                                    'px-3 py-2 rounded-md  font-medium text-lg'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="bg-darkBlue px-3 py-2 rounded-lg text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                >
                                    <CalculatorIcon className="h-6 w-6 inline-block" aria-hidden="true" />
                                    <span className="relative top-0.5">Get Quotation</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden bg-opacity-25">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? ' text-darkBlue text-lg font-medium' : 'text-white  hover:text-darkBlue',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
