// import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Download } from 'lucide-react';

interface ChatDisplayProps {
    markdown: string;
}

export function ChatDisplay({ markdown }: ChatDisplayProps) {
    const handleDownload = () => {
        const blob = new Blob([markdown], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'chat-response.md';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="mt-6 bg-white rounded-lg shadow-sm border p-6">
            <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-gray-900">Response</h3>
                <button
                    onClick={handleDownload}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
                >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                </button>
            </div>
            <div className="prose max-w-none">
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
}