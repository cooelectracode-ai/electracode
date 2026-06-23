"use client";
import React, { useEffect } from 'react';
import '@/styles/global.css';
import '@/styles/navbar.css';
import '@/styles/code.css';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';



export default function Code() {
  return (
    <>
      

    {/*  Navbar  */}
    <Navbar />

<div className="dashboard-container">
    {/*  Sidebar  */}
    <Sidebar />

    <main className="main-content">
        {/*  Main Container  */}
        <div className="code-page">

        {/*  Left Panel  */}
        <section className="problem-panel">

            <h1>Problem: Implement 4-bit ALU</h1>

            <p>
                Design a 4-bit Arithmetic Logic Unit (ALU) that can perform
                the following operations:
            </p>

            <h2>Operations</h2>

            <ul>
                <li>ADD (opcode: 000)</li>
                <li>SUB (opcode: 001)</li>
                <li>AND (opcode: 010)</li>
                <li>OR (opcode: 011)</li>
                <li>XOR (opcode: 100)</li>
                <li>SHL (opcode: 101)</li>
            </ul>

            <h2>Input/Output</h2>

            <div className="info-box">
                <pre>
input [3:0] A, B;
input [2:0] opcode;
output [3:0] result;
output carry_out;
</pre>
            </div>

            <h2>Example</h2>

            <div className="info-box">
                <pre>
A = 4'b1010 (10)
B = 4'b0011 (3)
opcode = 3'b000 (ADD)
result = 4'b1101 (13)
carry_out = 0
</pre>
            </div>

            <h2>Constraints</h2>

            <ul>
                <li>Use Verilog HDL</li>
                <li>Implement using combinational logic</li>
                <li>Handle overflow appropriately</li>
                <li>Time limit: 45 minutes</li>
            </ul>

        </section>

        {/*  Right Panel  */}
        <section className="editor-panel">

            <div className="editor-header">

                <select>
                    <option>Verilog</option>
                    <option>VHDL</option>
                    <option>SystemVerilog</option>
                    <option>Embedded C</option>
                </select>

                <div className="timer">⏱ 32:15</div>

                <div className="difficulty">
                    Medium Difficulty
                </div>

            </div>

            <textarea className="editor">
module alu_4bit(

input [3:0] A,
input [3:0] B,
input [2:0] opcode,

output reg [3:0] result,
output reg carry_out

);

always @(*) begin

case(opcode)

3'b000: &#123;carry_out, result&#125; = A + B;
3'b001: &#123;carry_out, result&#125; = A - B;
3'b010: result = A & B;
3'b011: result = A | B;
3'b100: result = A ^ B;
3'b101: result = A &lt;&lt; 1;

default: result = 4'b0000;

endcase

end

endmodule
            </textarea>

            <div className="action-bar">
                <button className="run-btn">▶ Run Code</button>
                <button className="submit-btn">✓ Submit</button>
            </div>

            <div className="console">
                <h3>Output Console</h3>

                <pre>
✓ Test Case 1: PASSED
✓ Test Case 2: PASSED
✓ Test Case 3: PASSED

All test cases passed! Ready to submit.
</pre>
            </div>

        </section>

        </div>

    </main>
</div>

    <script type="module" src="../js/navbar-auth.js"></script>
    <script type="module" src="../js/auth-guard.js"></script>
    <script type="module" src="../js/sidebar.js"></script>

    </>
  );
}
