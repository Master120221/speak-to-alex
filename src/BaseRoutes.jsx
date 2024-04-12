/****************************************************************
 * Copyright (c) 2023-2024 Dmytro Ostapenko. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *****************************************************************/

import React from 'react';
import {Route, Routes} from "react-router-dom";
import MaterialWindow from "./components/MaterialWindow";
import ChatList from "./components/ChatList";
import WelcomePage from "./components/WelcomePage";
import PromptStore from "./components/PromptStore";
import Tips from "./components/Tips";
import PromptView from "./components/PromptView";

function BaseRoutes(props) {
    return (
        <Routes>
            <Route path="/" element={
                <WelcomePage/>
            } exact />
            <Route path="/chat" element={
                <MaterialWindow page={"chat"}>
                    <ChatList/>
                </MaterialWindow>
            } exact />
            <Route path="/prompts" element={
                <MaterialWindow page={"prompts"}>
                    <PromptStore/>
                </MaterialWindow>
            } exact />
            <Route path="/tips" element={
                <MaterialWindow page={"tips"}>
                    <Tips/>
                </MaterialWindow>
            } exact />
            <Route path="/chat/:id" element={
                <MaterialWindow page={"chat"}>
                    <ChatList/>
                </MaterialWindow>
            } />
            <Route path="/prompts/:id" element={
                <MaterialWindow page={"prompts"}>
                    <PromptView/>
                </MaterialWindow>
            } />
        </Routes>
    );
}

export default BaseRoutes;
