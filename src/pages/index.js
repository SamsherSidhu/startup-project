// src/pages/index.js
export default function HomePage() {
    return (
        <div className="min-h-screen bg-white">
            {/* Navigation */}
            <nav className="border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="text-xl font-bold">YourStartup</div>
                        <div className="flex gap-6">
                            <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
                            <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
                        </div>
                        <div className="flex gap-4">
                            <button className="text-gray-600 hover:text-gray-900">Login</button>
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
                        Build Something Amazing
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                        Get started with our powerful platform that helps you create, manage,
                        and scale your projects with ease.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
                            Get Started Free
                        </button>
                        <button className="border border-gray-300 px-6 py-3 rounded-lg hover:border-gray-400">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold">Everything you need</h2>
                        <p className="text-gray-600 mt-4">
                            Carefully crafted features to help you succeed
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Lightning Fast',
                                description: 'Built for speed and performance from the ground up.'
                            },
                            {
                                title: 'Secure by Default',
                                description: 'Enterprise-grade security for every customer.'
                            },
                            {
                                title: 'Built for Scale',
                                description: 'Grow with confidence knowing we grow with you.'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                                <p className="text-gray-600">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Social Proof Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Trusted by thousands</h2>
                    <p className="text-gray-600">
                        Join the thousands of teams already using our platform
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        "99.9% Uptime",
                        "24/7 Support",
                        "100k+ Users"
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-lg font-semibold">{stat}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}